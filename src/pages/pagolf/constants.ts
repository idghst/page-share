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
        footer_button: 'text-xl',
        label: 'text-xl',
        input: 'text-xl',
        button: 'text-xl',
    },
    medium: {
        header: 'text-2xl',
        footer_button: 'text-2xl',
        label: 'text-2xl',
        input: 'text-2xl',
        button: 'text-2xl',
    },
    large: {
        header: 'text-3xl',
        footer_button: 'text-3xl',
        label: 'text-3xl',
        input: 'text-3xl',
        button: 'text-3xl',
    },
} as const;
