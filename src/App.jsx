import { RouterProvider } from "react-router-dom";
import { router } from "./utils/index.utils";
import { Provider } from "react-redux";
import { store } from "./store/store";
import React from "react";
import { Title } from "./components/index.components";
import { CONSTANTS } from "./utils/index.utils";

function App() {
  return (
    <Provider store={store}>
      <Title text={CONSTANTS.Header_Title} />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
