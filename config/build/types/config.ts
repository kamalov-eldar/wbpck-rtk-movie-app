export type TBuildMode = "development" | "production";

export interface IBuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: IBuildPath;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}

export interface IBuildEnv {
    mode: TBuildMode;
    port: number;
    apiUrl: string;
}
