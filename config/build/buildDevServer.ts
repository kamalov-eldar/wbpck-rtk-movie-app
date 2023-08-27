import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IBuildOptions } from "./types/config";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: false,
        https: false,// чтоб [webpack-dev-server] Disconnected! [webpack-dev-server] Trying to reconnect... не срабатывал
    };
}
