import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CustomButton } from "./index.customButton";

describe("CustomButton Component", () => {
  it("1. Renders with provided text", () => {
    // Arrange: Render CustomButton with specific text
    const buttonText = "Click Me";
    const { getByText } = render(<CustomButton text={buttonText} />);

    // Act: Find the button with the provided text
    const buttonElement = getByText(buttonText);

    // Assert: Button with the specified text should be in the document
    expect(buttonElement).toBeInTheDocument();
  });

  it("2. Renders with provided children", () => {
    // Arrange: Render CustomButton with specific children
    const { getByText } = render(
      <CustomButton>
        <span>Click Me</span>
      </CustomButton>
    );

    // Act: Find the button with the specific child element
    const childElement = getByText("Click Me");

    // Assert: Button should contain the specified child element
    expect(childElement).toBeInTheDocument();
  });

  it("3. Calls the provided onClick function when clicked", () => {
    // Arrange: Set up a mock onClick function
    const onClickMock = jest.fn();
    const { getByText } = render(
      <CustomButton onClick={onClickMock} text={"Click Me"} />
    );

    // Act: Simulate a click on the button
    const buttonElement = getByText("Click Me");
    fireEvent.click(buttonElement);

    // Assert: onClick function should be called once
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("4. Renders as disabled when disabled prop is true", () => {
    // Arrange: Render CustomButton with disabled prop set to true
    const { getByText } = render(
      <CustomButton text="Click Me" disabled={true} />
    );

    // Act: Find the button and check if it's disabled
    const buttonElement = getByText("Click Me");

    // Assert: Button should be disabled
    expect(buttonElement).toBeDisabled();
  });
});
