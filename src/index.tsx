import App from "App";
import {  HashRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import ThemeProvider from "providers/themeProvider/ThemeProvider";
import { StoreProvider } from "providers/storeProvider/StoreProvider";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript strict

root.render(
    <HashRouter>
        <StoreProvider>
            <StyledEngineProvider injectFirst>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StyledEngineProvider>
        </StoreProvider>
    </HashRouter>,
);

/* render(
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
); */

/*
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

*/
