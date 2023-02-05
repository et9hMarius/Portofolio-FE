import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto-mono";

import NavBar from "./components/NavBar";

import One from "./components/sections/one";
import Two from "./components/sections/two";

import OneTwo from "./components/dividers/OneTwo";
import TwoThree from "./components/dividers/TwoThree";
import Three from "./components/sections/three";
import Four from "./components/sections/four";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./components/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App" id="app">
        <NavBar />
        <One />
        <OneTwo />
        <Two />
        <TwoThree />
        <Three />
        <Four />
      </div>
    ),
  },
  {
    path: "/project/:id",
    element: (
      <div className="App" id="app">
        <Project />
      </div>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
