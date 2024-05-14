import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom'
import ExercisePage from './pages/ExercisePage';

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <h1 className='display-1 text-center mt-5 pt-5'>404 not found! <Link className='display-5 d-block' to="/">Go back to the home page</Link></h1>
},{
  path: '/exercise/:exerciseId',
  element: <ExercisePage />
}]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
