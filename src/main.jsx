import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AuthProvider from './private pages/AuthProvider.jsx';
import AddMovie from './private pages/AddMovie.jsx';
import Favourites from './private pages/Favourites.jsx';
import Movies from './pages/Movies.jsx';
import PublicRout from './routes/PublicRout.jsx';
import PrivateRoute from './routes/PrivateRoute';
import MovieDetails from './private pages/movieDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRout></PublicRout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'movies',
        element: <Movies></Movies>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: '/',
    element: <PrivateRoute></PrivateRoute>,
    children: [
      {
        path: 'add-movie',
        element: <AddMovie></AddMovie>
      },
      {
        path: 'favourites',
        element: <Favourites></Favourites>
      },
      {
        path: 'movies/:id',
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
