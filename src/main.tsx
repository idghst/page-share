import { StrictMode, useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 감지
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 전체 앱 오버스크롤 방지 및 사이드바 스크롤 제어
  useEffect(() => {
    // 오버스크롤 방지 스타일 적용
    const applyOverscrollPrevention = () => {
      document.documentElement.style.overscrollBehavior = 'none';
      document.body.style.overscrollBehavior = 'none';
      document.documentElement.style.touchAction = 'pan-x pan-y';
      document.body.style.touchAction = 'pan-x pan-y';
    };

    applyOverscrollPrevention();

    // 모바일에서 사이드바가 열릴 때 배경 스크롤 비활성화
    if (isMobile && isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      // 컴포넌트 언마운트 시에만 스타일 초기화 (오버스크롤 방지는 유지)
      if (isMobile && isSidebarOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [isMobile, isSidebarOpen]);

  // 불필요한 터치 이벤트 방지
  useEffect(() => {
    const preventUnnecessaryScroll = (e: TouchEvent) => {
      // 스크롤 가능한 영역이 아닌 곳에서의 오버스크롤 방지
      const target = e.target as HTMLElement;
      const scrollableParent = target.closest('.scrollable-area');

      if (!scrollableParent) {
        // 스크롤 가능한 영역이 아닌 경우, 세로 스크롤 방지
        if (e.touches.length === 1) {
          const touch = e.touches[0];
          const startY = touch.clientY;

          // 페이지 상단/하단에서의 오버스크롤 방지
          if (window.scrollY <= 0 && startY > touch.clientY) {
            e.preventDefault();
          }
          if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && startY < touch.clientY) {
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('touchmove', preventUnnecessaryScroll, { passive: false });
    return () => document.removeEventListener('touchmove', preventUnnecessaryScroll);
  }, []);

  return (
    <main className="w-full h-dvh flex flex-col">

      {/* 메인 컨테이너 */}
      <div className="flex flex-1 min-h-0 relative">

        {/* 메인 컨텐츠 */}
        <div id="main-scroll-container" className="flex-1 min-w-0 overflow-y-auto overscroll-y-none">
          <App />
        </div>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
