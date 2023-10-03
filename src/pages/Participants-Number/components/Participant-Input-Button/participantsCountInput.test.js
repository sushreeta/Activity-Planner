import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { ParticipantCountInput } from "./participantsCountInput.component";
import { CONSTANTS, ROUTES } from "../../../../utils/constants";

// Create a mock Redux store
const mockStore = configureStore([]);

// Describe block for the test suite
describe("ParticipantCountInput Component", () => {
  let store;
  let component;

  // Set up the store and render the component before each test
  beforeEach(() => {
    store = mockStore({
      participants: {
        numOfParticipants: 0,
      },
    });

    // Render the component with Redux store and Router context
    component = render(
      <Provider store={store}>
        <Router>
          <ParticipantCountInput />
        </Router>
      </Provider>
    );
  });

  // Test case: Check if the component renders without crashing
  it("1. Renders without crashing", () => {
    expect(
      component.getByText(CONSTANTS.Participants_Number_Title)
    ).toBeInTheDocument();
  });

  // Test case: Check if the input value updates correctly
  it("2. Updates input value correctly", () => {
    const input = component.getByPlaceholderText("0");
    fireEvent.change(input, { target: { value: "3" } });
    expect(input.value).toBe("3");
  });

  // Test case: Check if the form submission works correctly
  it("3. Handles form submission correctly", async () => {
    const input = component.getByPlaceholderText("0");
    fireEvent.change(input, { target: { value: "3" } });

    const submitButton = component.getByText(CONSTANTS.Submit_Button_Title);
      fireEvent.click(submitButton);
      
    expect(window.location.pathname).toBe(ROUTES.Names);
  });
});
