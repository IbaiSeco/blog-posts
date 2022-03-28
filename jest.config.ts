// jest.config.ts
export default {
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
        '^@/components/(.*)$': '<rootDir>/components/$1'
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    testEnvironment: "jsdom"
}