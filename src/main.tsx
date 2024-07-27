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
import CustomNavbar from './components/customNav.tsx';
import ReviewForm from './components/reviewForm.tsx';
import Layout from './layout.tsx';

const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Root />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //     errorElement: <ErrorPage />
  //   },
  //   {
  //     path: "/signup",
  //     element: <SignUp />,
  //     errorElement: <ErrorPage />
  //   },
  //   {
  //     path: "/reviewform",
  //     element: <ReviewForm />,
  //     errorElement: <ErrorPage />
  //   },

  {
    path: '/',
    element: <Layout />, // Layout component wraps all routes
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Root /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'reviewform', element: <ReviewForm /> },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  //   errorElement: <ErrorPage />
  // },
  // {
  //   path: "/signup",
  //   element: <SignUp />,
  //   errorElement: <ErrorPage />
  // },
  // {
  //   path: "/reviewform",
  //   element: <ReviewForm />,
  //   errorElement: <ErrorPage />
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CustomNavbar /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
