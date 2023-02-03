import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Display  from './components/Display';
import {Add}  from './components/Add';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children: [
      {
        path: "/display",
        element: <Display />
      },
      {
        path: "/add",
        element: <Add />
      },
     
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();
