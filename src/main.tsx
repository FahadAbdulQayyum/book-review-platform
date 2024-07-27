import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import Root, { loader as rootLoader } from "./routes/root";

// import RouterReusable from './components/routeReusable.tsx'
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './components/error-page'
import Login from './components/login.tsx';
import SignUp from './components/signup.tsx';
import { store } from './store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
