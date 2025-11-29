import { useNavigate } from 'react-router-dom';

import { FONT_CONFIG, type FontSize, type FontConfig } from './constants';

interface FooterButtonProps {
    showBackButton?: boolean;
    nextButtonLabel?: string;
    fontSize: FontSize;
    fontConfig?: FontConfig;
    onNextClick: () => void;
    onBackClick?: () => void;
}

const FooterButton = ({
    showBackButton = true,
    nextButtonLabel = '다음',
    fontSize,
    fontConfig = FONT_CONFIG,
    onNextClick,
    onBackClick
}: FooterButtonProps) => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBackClick) {
            onBackClick();
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="mt-auto pt-4 flex gap-3">
            {showBackButton && (
                <button
                    onClick={handleBack}
                    className={`flex-1 bg-gray-200 text-gray-700 font-bold py-4 rounded-xl ${fontConfig[fontSize].footer_button} hover:bg-gray-300 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700`}
                >
                    뒤로
                </button>
            )}
            <button
                onClick={onNextClick}
                className={`${showBackButton ? 'flex-[2]' : 'w-full'} bg-[#1e4632] text-white font-bold py-4 rounded-xl ${fontConfig[fontSize].footer_button} hover:bg-[#163324] transition-colors shadow-lg dark:bg-[#4ade80] dark:text-[#1e4632]`}
            >
                {nextButtonLabel}
            </button>
        </div>
    );
};

export default FooterButton;
