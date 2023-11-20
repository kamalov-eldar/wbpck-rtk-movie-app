import { render, screen } from "@testing-library/react";
import Button, { ButtonTheme } from "./Button";

describe("Button", () => {
    test("Test render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument(); //.toBeInTheDocument();
    });

    /*  test("Test ", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("btn");
        screen.debug(); // чтоб увидеть какая кнопка отрендерилась
    });
    test("Test ", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("btn btn-outline");
        screen.debug();
    }); */
    test("Test clear theme", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
        screen.debug();
    });
});
