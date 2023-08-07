import App from "App";
import { render } from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import ThemeProvider from "providers/theme/ThemeProvider";
import { StoreProvider } from "providers/store/StoreProvider";

render(
    <StoreProvider>
        <HashRouter>
            <StyledEngineProvider injectFirst>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StyledEngineProvider>
        </HashRouter>
    </StoreProvider>,
    document.getElementById("root"),
);
