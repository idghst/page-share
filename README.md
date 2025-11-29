# Page Share Library

이 프로젝트는 다른 React 프로젝트에서 재사용할 수 있는 공통 컴포넌트 라이브러리입니다.

## 📦 설치 방법 (Installation)

### 방법 1: Git URL로 설치 (추천)
NPM 레지스트리에 배포하지 않고, GitHub(또는 GitLab) 저장소 주소를 통해 직접 설치할 수 있습니다.

```bash
# HTTPS 사용 시
npm install git+https://github.com/username/page-share.git

# SSH 사용 시
npm install git+ssh://git@github.com/username/page-share.git
```
*주의: `package.json`의 `files` 필드에 의해 `dist` 폴더만 설치되므로, 설치 전 반드시 `page-share` 프로젝트에서 `npm run build`가 선행되어야 하거나, 저장소에 `dist` 폴더가 포함되어 있어야 합니다. (일반적으로는 CI/CD에서 빌드 후 아티팩트를 사용하거나, NPM 배포를 권장합니다.)*

### 방법 2: 로컬 개발용 연결 (npm link)
두 프로젝트를 로컬에서 동시에 개발할 때 유용합니다.

1. **page-share 프로젝트에서:**
   ```bash
   npm link
   ```

2. **사용할 프로젝트(예: page-pagolf-client)에서:**
   ```bash
   npm link page-share
   ```

### 방법 3: 파일 경로로 설치 (로컬)
```bash
npm install ../path/to/page-share
```

---

## 🚀 사용 방법 (Usage)

### 1. 컴포넌트 사용

```tsx
import { Header, FooterButton } from 'page-share';
import 'page-share/dist/style.css'; // 스타일이 있다면 import (현재 설정상 CSS가 JS에 포함되지 않았다면 필요)

function MyPage() {
  return (
    <div>
      <Header 
        title="내 프로젝트 페이지" 
        showBackButton={true}
      />
      
      <main>컨텐츠...</main>
      
      <FooterButton 
        fontSize="medium"
        onNextClick={() => console.log('다음으로!')}
      />
    </div>
  );
}
```

### 2. 폰트 설정 커스터마이징 (Font Configuration)

기본 제공되는 폰트 설정(`FONT_CONFIG`) 대신 프로젝트에 맞는 설정을 주입할 수 있습니다.

```tsx
import { Header, type FontConfig } from 'page-share';

// 1. 나만의 설정 정의
const MY_PROJECT_FONT_CONFIG: FontConfig = {
  small: {
    header: 'text-lg',
    footer_button: 'text-sm',
    label: 'text-xs',
    input: 'text-sm',
    button: 'text-sm',
  },
  medium: {
    header: 'text-xl',
    footer_button: 'text-base',
    label: 'text-sm',
    input: 'text-base',
    button: 'text-base',
  },
  large: {
    header: 'text-2xl',
    footer_button: 'text-xl',
    label: 'text-lg',
    input: 'text-lg',
    button: 'text-lg',
  },
};

// 2. 컴포넌트에 주입
function MyPage() {
  return (
    <Header 
      title="커스텀 폰트 헤더" 
      fontConfig={MY_PROJECT_FONT_CONFIG} 
    />
  );
}
```

## 🛠 빌드 명령어

```bash
# 라이브러리 빌드 (dist 폴더 생성)
npm run build
```