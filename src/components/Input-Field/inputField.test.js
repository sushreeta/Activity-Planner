import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for custom jest matchers

import { InputField } from "./index.inputField";

const placeholderText = "Test Placeholder";

describe("InputField Component", () => {
  it("1. Renders for type text and placeholder", () => {
    // Arrange: Render the InputField component with a specified placeholder and type
    const { getByPlaceholderText } = render(
      <InputField placeholder={placeholderText} type="text" />
    );

    // Act: Retrieve the input element by placeholder text
    const input = getByPlaceholderText(placeholderText);

    // Assert: Ensure the input field is rendered and has correct type attribute
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it.only("2. Check onChange handler when input value changes", () => {
    // Arrange: Set up a mock onChange function using jest.fn()
    const onChange = jest.fn();

    // Act: Render the InputField component with a placeholder text
    const { getByPlaceholderText } = render(
      <InputField placeholder={placeholderText} onChange={onChange} />
    );

    // Act: Simulate a user changing the input value
    const input = getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value: "Test Value" } });

    // Assert: Ensure onChange function is called with the correct arguments
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      key: "",
      value: "Test Value",
      index: 0,
    });
  });

  it("3. Validation fails and show error", () => {
    // Arrange: Set up validation function that triggers an error for a specific input
    const inputFieldText = "setErrorvalue";
    const errorText = "This field is required";
    const validation = ({ value, setError }) => {
      if (value === inputFieldText) {
        setError(errorText);
      }
    };

    // Act: Render the InputField component with validation and specific initial value
    const { getByText, getByPlaceholderText } = render(
      <InputField
        placeholder={placeholderText}
        validation={validation}
        initialValue={inputFieldText}
      />
    );

    // Act: Simulate user input that triggers validation error
    const input = getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value: inputFieldText } });

    // Assert: Ensure the validation error message is displayed
    const errorElement = getByText(errorText);
    expect(errorElement).toBeInTheDocument();
  });

  it("4. Input value changes when the user provides input", () => {
    // Arrange: Render the InputField component
    const { getByPlaceholderText } = render(
      <InputField placeholder={placeholderText} />
    );

    // Act: Simulate user input
    const input = getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value: "Test Value" } });

    // Assert: Ensure the input value changes as expected
    expect(input).toHaveValue("Test Value");
  });
});
