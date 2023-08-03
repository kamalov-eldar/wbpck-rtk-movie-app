import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { JSX } from "react/jsx-runtime";
import { componentRender } from "../../../config/jest/componentRender/componentRender";
import RootStore from "store/root-store";
import { RootStoreContext } from "root-store-context";

/*describe("Footer", () => {
     test("with only first param", () => {
        componentRender(<Footer />);
        expect(screen.getByTestId("Footer")).toBeInTheDocument();
    });
    test("Footer Rendering", () => {
        componentRender(<Footer />); // Rendering the App
        expect(screen.getByTestId("Footer")).toBeInTheDocument();
        // const button = screen.getByTestId("button");
        // const linkElement = screen.getByText(/Movies/i);
        // expect(linkElement).toBeInTheDocument();
        // expect(button).toBeInTheDocument();
    });

    // toBeInTheDocument что элемент находится в теле документа или нет
     test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});*/

/* afterEach(cleanup);

it("renders", () => {
    const {getByTestId} = render(
        <RootStoreContext.Provider value={new RootStore()}>
            <Footer />
        </RootStoreContext.Provider>,
    );
}); */
