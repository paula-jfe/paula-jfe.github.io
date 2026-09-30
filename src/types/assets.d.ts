// Side-effect stylesheet imports (e.g. import './index.css'), bundled by webpack.
declare module '*.css';

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    const src: string;
    export default src;
}

declare module '*.pdf' {
    const src: string;
    export default src;
}

declare module '*.woff2' {
    const src: string;
    export default src;
}
