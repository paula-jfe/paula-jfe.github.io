import React from 'react';

const paths = {
    arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
    arrowLeft: <path d="M19 12H5m6 6-6-6 6-6" />,
    arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
    download: <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    alert: <path d="M12 7v6m0 4h.01" />,
    retry: <path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5" />,
    code: <path d="m9 8-4 4 4 4m6-8 4 4-4 4" />,
    terminal: (
        <>
            <rect x="3" y="4" width="18" height="16" rx="3" />
            <path d="m7 10 3 2.5L7 15m5 0h5" />
        </>
    ),
    brush: <path d="M14.5 4.5 19.5 9.5 11 18l-5-5 8.5-8.5ZM6 13l-2.5 6.5L10 17" />,
    palette: (
        <path d="M12 3a9 9 0 0 0 0 18c1 0 1.6-.7 1.6-1.6 0-.9-.8-1.3-.8-2.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5c0-4.2-4-7.6-9-7.6ZM7.5 12h.01M9.5 8h.01M14.5 8h.01M16.5 12h.01" />
    ),
    shield: <path d="M12 3 5 6v5.5c0 4.2 2.9 8 7 9.5 4.1-1.5 7-5.3 7-9.5V6l-7-3Zm-3 9 2 2 4-4" />,
    chart: <path d="M4 19V5m0 14h16M8 15l3.5-4 3 3L19 8" />,
    calendar: (
        <>
            <rect x="4" y="5" width="16" height="15" rx="3" />
            <path d="M8 3v4m8-4v4M4 10h16" />
        </>
    ),
    rocket: (
        <path d="M5 19c1-3 2-4 4-5m-1.5 1.5 3 3M14 4c3 0 6 3 6 6l-6 6-6-6 6-6Zm1 5h.01" />
    ),
    quote: <path d="M9 7H6a2 2 0 0 0-2 2v3h5v5H4m16-10h-3a2 2 0 0 0-2 2v3h5v5h-5" />,
    mail: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m4 7 8 6 8-6" />
        </>
    ),
} as const;

export type IconName = keyof typeof paths;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
    title?: string;
}

/** Stroke icon set. Decorative by default; pass `title` to expose it to assistive tech. */
const Icon: React.FC<IconProps> = ({ name, size = 20, title, className, ...rest }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden={title ? undefined : true}
        role={title ? 'img' : undefined}
        focusable="false"
        {...rest}
    >
        {title && <title>{title}</title>}
        {paths[name]}
    </svg>
);

export const LinkedInIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
);

export const GitHubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z" />
    </svg>
);

export const BehanceIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8.23 11.37c.72-.36 1.26-1 1.26-2.06C9.49 7.1 7.9 6.5 6.07 6.5H1v11h5.2c1.97 0 3.8-.93 3.8-3.16 0-1.37-.65-2.37-1.77-2.97ZM3.36 8.37h2.2c.85 0 1.6.24 1.6 1.22 0 .9-.6 1.26-1.43 1.26H3.36V8.37Zm2.5 7.25h-2.5v-3.03h2.55c1.03 0 1.68.43 1.68 1.52 0 1.07-.78 1.5-1.73 1.5ZM16.8 9.2c-2.5 0-4.2 1.87-4.2 4.34 0 2.55 1.6 4.3 4.2 4.3 1.96 0 3.24-.88 3.85-2.77h-2c-.22.7-1.1 1.07-1.78 1.07-1.33 0-2.02-.78-2.02-2.09h5.93c.1-2.64-1.37-4.85-3.98-4.85Zm-1.95 3.4c.07-1.07.78-1.75 1.86-1.75 1.13 0 1.7.66 1.8 1.75h-3.66ZM14.5 6.9h4.64v1.13H14.5V6.9Z" />
    </svg>
);

export default Icon;
