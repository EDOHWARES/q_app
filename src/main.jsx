import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Root from "./components/Login";
import { QuizApp } from './components/QuizApp.jsx';
import ErrorPage from './components/ErrorPage.jsx';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: "quiz",
    element: <QuizApp />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
