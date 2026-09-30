module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.tsx',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|webp|pdf|svg|woff2)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    testTimeout: 10000,
    // babel-jest (bundled with Jest) compiles TS/TSX with .babelrc, the same pipeline as webpack.
    // Type checking runs separately (npm run typecheck).
    transform: {
        '^.+\\.(m?js|jsx|tsx?)$': 'babel-jest',
    },
    // React Router 8 and its dependencies ship ES modules only: let Babel compile them for Jest.
    transformIgnorePatterns: ['/node_modules/(?!(react-router|cookie-es|@remix-run)/)'],
};
