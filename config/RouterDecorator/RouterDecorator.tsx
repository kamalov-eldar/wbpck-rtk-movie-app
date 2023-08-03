import { Decorator } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

//export const StyleDecorator: Decorator = (Story) => Story();
//export const StyleDecorator = (story: () => Story) => story();

export const RouterDecorator: Decorator = (Story) => <BrowserRouter>{Story()}</BrowserRouter>;
