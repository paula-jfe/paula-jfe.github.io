/** @type {import('tailwindcss').Config} */
// Design tokens mirror the Figma variables (collections: Color, Font Size, Radius).
// Font sizes point to CSS custom properties defined in src/index.css, which switch
// values per breakpoint (Mobile < 768px, Tablet >= 768px, Desktop >= 1280px).
// Breakpoints are Tailwind's defaults: md = 48rem (768px), xl = 80rem (1280px).
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                display: ['Roboto', 'system-ui', 'sans-serif'],
                sans: ['"Spline Sans"', 'system-ui', 'sans-serif'],
                logo: ['Outfit', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['var(--font-size-display-xl)', { lineHeight: '1.04' }],
                'display-lg': ['var(--font-size-display-lg)', { lineHeight: '1.04' }],
                'heading-1': ['var(--font-size-heading-1)', { lineHeight: '1.08' }],
                'heading-2': ['var(--font-size-heading-2)', { lineHeight: '1.1' }],
                'heading-3': ['var(--font-size-heading-3)', { lineHeight: '1.15' }],
                'heading-4': ['var(--font-size-heading-4)', { lineHeight: '1.2' }],
                'heading-5': ['var(--font-size-heading-5)', { lineHeight: '1.3' }],
                'heading-6': ['var(--font-size-heading-6)', { lineHeight: '1.4' }],
                'body-lg': ['var(--font-size-body-lg)', { lineHeight: '1.6' }],
                body: ['var(--font-size-body)', { lineHeight: '1.55' }],
                'body-sm': ['var(--font-size-body-sm)', { lineHeight: '1.5' }],
                caption: ['var(--font-size-caption)', { lineHeight: '1.4' }],
            },
            colors: {
                brand: {
                    DEFAULT: '#7F13EC',
                    hover: '#6A0FD0',
                    pressed: '#5A0CB0',
                    subtle: '#CFC0F2',
                    logo: '#A855F7',
                },
                accent: {
                    magenta: '#B940A7',
                    blue: '#7797DD',
                    yellow: '#FFD700',
                    orange: '#F1A950',
                    // Text-safe variants (>= 3:1 on white for large text, WCAG 1.4.3)
                    'blue-text': '#5D78CE',
                    'orange-text': '#B8621B',
                },
                ink: '#141118',
                muted: '#756189',
                placeholder: '#A99BB8',
                surface: {
                    page: '#F9F7FF',
                    alt: '#F7F5FD',
                    soft: '#F1ECFB',
                    dark: '#2D272F',
                },
                line: '#E4DCF8',
                success: { DEFAULT: '#15803D', bg: '#DCFCE7', dot: '#22C55E' },
                warning: { DEFAULT: '#735A00', bg: '#FFF4CC', dot: '#F5B400' },
                danger: { DEFAULT: '#D92D35', bg: '#FDECEC' },
            },
            borderRadius: {
                xs: '6px',
                sm: '12px',
                md: '16px',
                lg: '24px',
                xl: '32px',
            },
            maxWidth: {
                content: '1216px',
            },
            boxShadow: {
                card: '0 12px 32px 0 rgba(77, 26, 128, 0.06)',
                'card-hover': '0 24px 48px 0 rgba(77, 26, 128, 0.16)',
                button: '0 10px 24px -6px rgba(127, 19, 236, 0.25)',
                'button-hover': '0 10px 24px -6px rgba(127, 19, 236, 0.4)',
                float: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                badge: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            },
            // Hero "Main Visual Element" prototype: hold 3s, cross-fade 1.02s (Smart Animate, Gentle),
            // hold 3s, cross-fade back. 8.04s per loop: 37.3% = 3s, 50% = 4.02s, 87.3% = 7.02s.
            keyframes: {
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                'hero-first': {
                    '0%, 37.3%, 100%': { opacity: '1' },
                    '50%, 87.3%': { opacity: '0' },
                },
                'hero-second': {
                    '0%, 37.3%, 100%': { opacity: '0' },
                    '50%, 87.3%': { opacity: '1' },
                },
                'hero-badge-first': {
                    '0%, 37.3%, 100%': { opacity: '1' },
                    '50%, 87.3%': { opacity: '0.1' },
                },
                'hero-badge-second': {
                    '0%, 37.3%, 100%': { opacity: '0.1' },
                    '50%, 87.3%': { opacity: '1' },
                },
            },
            animation: {
                marquee: 'marquee 40s linear infinite',
                'hero-first': 'hero-first 8.04s cubic-bezier(0.45, 0, 0.25, 1) infinite',
                'hero-second': 'hero-second 8.04s cubic-bezier(0.45, 0, 0.25, 1) infinite',
                'hero-badge-first': 'hero-badge-first 8.04s cubic-bezier(0.45, 0, 0.25, 1) infinite',
                'hero-badge-second': 'hero-badge-second 8.04s cubic-bezier(0.45, 0, 0.25, 1) infinite',
            },
        },
    },
    plugins: [],
};
