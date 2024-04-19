import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './App.css';

import { AuthProvider } from './components/AuthContext.jsx';

import Root from "./components/Login";
import { QuizApp } from './components/QuizApp.jsx';
import ChoicePage from './components/ChoicePage.jsx';
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
    path: "quiz/:id",
    element: <QuizApp />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
  {
    path: 'choices',
    element: <ChoicePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
