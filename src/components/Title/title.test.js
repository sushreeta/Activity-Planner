import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./index.title";

const Test_Title = "Test Title";

describe("Title Component", () => {
  it("1. Renders with title", () => {
    const { getByText } = render(<Title text={Test_Title} />);
    const titleElement = getByText(Test_Title);

    expect(titleElement).toBeInTheDocument();
  });

  it("3. Does not break with empty text", () => {
    const { container } = render(<Title />);
    expect(container.firstChild).toBeNull();
  });
});
