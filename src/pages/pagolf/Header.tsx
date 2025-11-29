import { useNavigate } from 'react-router-dom';

import { FONT_CONFIG, type FontSize, type FontConfig } from './constants';

interface HeaderProps {
    showBackButton?: boolean;
    showHomeButton?: boolean;
    title?: string;
    fontSize?: FontSize;
    fontConfig?: FontConfig;
    onBackClick?: () => void;
}

const Header = ({
    showBackButton = true,
    showHomeButton = true,
    title = '제목',
    fontSize = "medium",
    fontConfig = FONT_CONFIG,
    onBackClick,
}: HeaderProps) => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBackClick) {
            onBackClick();
        } else {
            navigate(-1);
        }
    }
    const handleHome = () => {
        navigate('/pagolf/main');
    }

    return (
        <header className="flex items-center justify-between mb-12 h-[40px]">
            {showBackButton &&
                <button onClick={handleBack} className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            }
            <div />
            <h1 className={`${fontConfig[fontSize].header} font-bold`}>{title}</h1>
            <div />
            {showHomeButton &&
                <button onClick={handleHome} className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </button>
            }
        </header>
    );
};

export default Header;
