import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { IBuildOptions } from "./types/config";

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            "file-loader",
            {
                loader: "image-webpack-loader",
                options: {
                    mozjpeg: {
                        progressive: true,
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: [0.65, 0.9],
                        speed: 4,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                },
            },
        ],
    };

    return [fileLoader, babelLoader, cssLoader, typescriptLoader, svgLoader];
}
