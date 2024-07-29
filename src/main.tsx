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
import Login from './components/login';
import SignUp from './components/signup';
import { store } from './store';
import { Provider } from 'react-redux';
import CustomNavbar from './components/customNav';
import ReviewForm from './components/reviewForm';
import Layout from './layout';
import MyReview from './components/myReview';
import ReviewForme from './components/reviewForme';
import MyProfile from './components/myProfile';

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
      { path: 'reviewforme', element: <ReviewForme /> },
      { path: 'myreview', element: <MyReview /> },
      { path: 'myprofile', element: <MyProfile /> },
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
