export default {
    roots: ['<rootDir>/test'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testMatch: ['**/*.spec.ts'],
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
};
