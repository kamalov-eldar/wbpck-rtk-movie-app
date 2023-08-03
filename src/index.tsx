import App from "App";
import { render } from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { RootStoreContext } from "root-store-context";
import RootStore from "store/root-store";
import { StyledEngineProvider } from "@mui/material/styles";
import ThemeProvider from "providers/theme/ThemeProvider";

render(
    <RootStoreContext.Provider value={new RootStore()}>
        <HashRouter>
            <StyledEngineProvider injectFirst>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StyledEngineProvider>
        </HashRouter>
    </RootStoreContext.Provider>,
    document.getElementById("root"),
);
