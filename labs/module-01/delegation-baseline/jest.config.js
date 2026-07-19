export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testEnvironmentOptions: {
        globalsCleanup: 'on',
    },
    roots: ['<rootDir>/test'],
    testMatch: ['**/*.test.ts'],
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },
    moduleNameMapper: {
        '^(\\.\\.?\\/.+)\\.js$': '$1',
    },
};