import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";

describe("ToDoList Tests", () => {
    test("test default list outputted", () => {
        render(<ToDoList />);

        const A = screen.getByTestId("Apples");
        const B = screen.getByTestId("Bananas");

        expect(A).toBeInTheDocument(),
        expect(B).toBeInTheDocument();
    });

    test("test default list outputted none", () => {
        render(<ToDoList />);

        const A = screen.getByTestId("Apples");
        const B = screen.getByTestId("Bananas");

        const bought = screen.getByTestId("items");
        expect(bought.innerHTML).toContain('Items bought: 0');

    });

    test("test default list outputted 1", () => {
        render(<ToDoList />);

        const A = screen.getByTestId("Apples");
        const B = screen.getByTestId("Bananas");

        fireEvent.click(A);

        const bought = screen.getByTestId("items");
        expect("Items bought: 1").toContain(bought.innerHTML);

    });
});


