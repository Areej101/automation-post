import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import Signin from './Signin/Sign';
import Signup from './Signup/sign-up';
import ForgetPass from './Forget-pass/forget';


const router = createHashRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget",
    element: <ForgetPass />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
