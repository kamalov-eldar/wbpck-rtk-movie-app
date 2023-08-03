import { ResolveOptions } from "webpack";
import { IBuildOptions } from "./types/config";

export function buildResolvers(options: IBuildOptions): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css", ".json"],
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };
}
