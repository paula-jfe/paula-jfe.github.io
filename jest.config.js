module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.tsx',
        '!src/context/*',
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
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|mp4|webm|ogg|pdf|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
