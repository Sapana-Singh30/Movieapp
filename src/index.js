import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './Components/Header/Header';
import ErrorPage from './Components/Error/ErrorPage';
// import Home from './Components/Pages/Home';
import New from "./Components/Pages/New";
// import Footer from './Components/Footer/Footer';
// import Footer from '../Components/Footer/Footer';
import MovieList from './Components/MovieList/MovieList';
import MovieDetails from "./Components/MovieDetails/MovieDetails";
// import { Outlet } from 'react-router-dom';
// import ShowSearchResult from './Components/Header/ShowSearchResult';
import ShowSearchResult from './Components/Header/ShowSearchResult';

const router = createBrowserRouter([
  {

    path: "/",
    element:
      (
        <>
          <Header />
          <Outlet />
          {/* <Home /> */}
          {/* <New /> */}
         {/* <MovieList /> */}
          {/* <Footer /> */}
        </>
      ),
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        
        element: <New />,

        // <>
        
        // {/* <MovieList /> */}
        // </>

      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "movies/:type",
        element: <MovieList />,
      },
      {
        path:"/showSearchResult",
        element: < ShowSearchResult />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

