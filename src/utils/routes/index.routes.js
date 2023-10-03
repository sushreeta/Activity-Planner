import { createBrowserRouter } from "react-router-dom";
import React from "react";
import {
  ActivityListScreen,
  ParticipantsNameScreen,
  ParticipantsNumberScreen,
} from "../../pages/index.pages";

const routes = [
  {
    path: "/",
    element: <ParticipantsNumberScreen />,
  },
  {
    path: "/names",
    element: <ParticipantsNameScreen />,
  },
  {
    path: "/activities",
    element: <ActivityListScreen />,
  },
];

export const router = createBrowserRouter(routes);
