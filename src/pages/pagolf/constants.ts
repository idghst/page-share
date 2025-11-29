export type FontSize = 'small' | 'medium' | 'large';

export interface FontConfigItem {
    header: string;
    footer_button: string;
    label: string;
    input: string;
    button: string;
}

export type FontConfig = Record<FontSize, FontConfigItem>;

export const FONT_CONFIG: FontConfig = {
    small: {
        header: 'text-xl',
        footer_button: 'text-base',
        label: 'text-sm',
        input: 'text-base',
        button: 'text-base',
    },
    medium: {
        header: 'text-2xl',
        footer_button: 'text-lg',
        label: 'text-base',
        input: 'text-lg',
        button: 'text-lg',
    },
    large: {
        header: 'text-3xl',
        footer_button: 'text-xl',
        label: 'text-lg',
        input: 'text-xl',
        button: 'text-xl',
    },
} as const;
