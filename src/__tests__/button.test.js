import Button from "../components/Button"
import {fireEvent, render,screen} from "@testing-library/react"
import App from "../App";
import Counter from "../components/Counter";
import renderer from "react-test-renderer"
;

describe("Testing button Component",()=>{
    it("Button Should Render",()=>{
render(<Button color={"teal"} size={"large"}>Click Me</Button>)

screen.debug()
const button=screen.getByText("Click Me")
expect(button).toBeInTheDocument();
    });
it("Buttom should be present in dom",()=>{
    render(<Button>Custom Button</Button>);
    const button=screen.getAllByTestId("custom-button")
    expect(button[0]).toBeInTheDocument("")
})
  it("Button should have text ",()=>{
    render(<App/>)
    const buttons=screen.getAllByTestId("custom-button")
expect(buttons[0]).toHaveTextContent("Click Me")
expect(buttons[1]).toHaveTextContent("Check it")
  }) 

  it("should invoke the function",()=>{
    const mockfunc=jest.fn()
    render(<Button func={mockfunc}/>);
    const button=screen.getByTestId("custom-button")
    fireEvent.click(button);

    expect(mockfunc).toBeCalledTimes(1)

  })


//Snapshot Testing

it("Should have snapshot",()=>{
    const tree=renderer.create(<Button color={"teal"} size={"large"}>Click Me</Button>).toJSON()
    expect(tree).toMatchSnapshot()
})

})



//for Counter

