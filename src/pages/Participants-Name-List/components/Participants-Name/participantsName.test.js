import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { ParticipantsNames } from "./participantsName.component";
import { CONSTANTS, ROUTES } from "../../../../utils/constants";

// Create a mock Redux store
const mockStore = configureStore([]);

// Describe block for the test suite
describe("ParticipantsNames Component", () => {
  let store;
  let component;

  // Sample participant names data for testing
  const participantNamesData = [
    { id: "p_1", name: "" },
    { id: "p_2", name: "" },
  ];

  // Set up the store and render the component before each test
  beforeEach(() => {
    store = mockStore({
      participants: {
        participantNames: participantNamesData,
      },
    });

    // Render the component with Redux store and Router context
    component = render(
      <Provider store={store}>
        <Router>
          <ParticipantsNames />
        </Router>
      </Provider>
    );
  });

  // Test case: Check if the component renders without crashing
  it("1. Renders without crashing", () => {
    expect(
      component.getByText(CONSTANTS.Participants_Name_Title)
    ).toBeInTheDocument();
  });

  // Test case: Check if participant name input updates correctly
  it("2. Updates participant name input correctly", () => {
    const input = component.getByPlaceholderText("Participant 1");
    fireEvent.change(input, { target: { value: "Sushreeta" } });

    expect(input.value).toBe("Sushreeta");
  });

  // Test case: Check if form submission works correctly
  it("3. Handles form submission correctly", async () => {
    const input = component.getByPlaceholderText("Participant 1");
    fireEvent.change(input, { target: { value: "Sushreeta" } });

    const submitButton = component.getByText(CONSTANTS.Submit_Button_Title);
    fireEvent.click(submitButton);

    expect(window.location.pathname).toBe(ROUTES.Activities);
  });
});
