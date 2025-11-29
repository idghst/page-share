import { default as default_2 } from 'react';
import { JSX } from 'react/jsx-runtime';

export declare const FONT_CONFIG: FontConfig;

export declare type FontConfig = Record<FontSize, FontConfigItem>;

export declare interface FontConfigItem {
    header: string;
    footer_button: string;
    label: string;
    input: string;
    button: string;
}

export declare type FontSize = 'small' | 'medium' | 'large';

export declare const FooterButton: ({ showBackButton, nextButtonLabel, fontSize, fontConfig, onNextClick, onBackClick }: FooterButtonProps) => JSX.Element;

declare interface FooterButtonProps {
    showBackButton?: boolean;
    nextButtonLabel?: string;
    fontSize: FontSize;
    fontConfig?: FontConfig;
    onNextClick: () => void;
    onBackClick?: () => void;
}

export declare const Header: ({ showBackButton, showHomeButton, title, fontSize, fontConfig, onBackClick, }: HeaderProps) => JSX.Element;

declare interface HeaderProps {
    showBackButton?: boolean;
    showHomeButton?: boolean;
    title?: string;
    fontSize?: FontSize;
    fontConfig?: FontConfig;
    onBackClick?: () => void;
}

export declare const Modal: default_2.FC<ModalProps>;

declare interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message: string;
    onConfirm: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
}

export { }
