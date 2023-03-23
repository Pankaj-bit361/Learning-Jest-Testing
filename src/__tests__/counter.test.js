import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Test the counter Component",()=>{
    it("Counter should be Present in Dom",()=>{
        render(<Counter/>)
        const text=screen.getByTestId("counter");
        const button=screen.getByTestId("custom-button");

        expect(text).toBeInTheDocument()
        expect(button).toBeInTheDocument()
        
    })

    it("it should have initial value",()=>{
        render(<Counter/>);
        const text=screen.getByTestId("counter")
        expect(text).toBeInTheDocument("Counter:0")
    })

    it("On Clicking the button count should increase",()=>{
render(<Counter/>)
        const text=screen.getByTestId("counter");
        expect(text).toHaveTextContent("Counter:0");

        const addBtn=screen.getByTestId("custom-button");
        fireEvent.click(addBtn);
        screen.debug()
        expect(text).toHaveTextContent("Counter:1");
        fireEvent.click(addBtn);
        expect(text).toHaveTextContent("Counter:2");
    })
})