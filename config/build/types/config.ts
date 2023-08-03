export type TBuildMode = 'development' | 'production';

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
}

export interface IBuildEnv {
    mode: TBuildMode;
    port: number;
}
