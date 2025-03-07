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
import Pricing from './pages/Pricing.jsx';
import MovieDetails from './private pages/MovieDetails.jsx';
import UpdateMovie from './private pages/UpdateMovie.jsx';


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
        element: <Movies></Movies>,
        loader: () => fetch('https://movie-portal-server-seven.vercel.app/movies')
      },
      {
        path: 'pricing',
        element: <Pricing></Pricing>
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
        path: 'favourite_movies',
        element: <Favourites></Favourites>
      },
      {
        path: 'movies/:id',
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) => fetch(`https://movie-portal-server-seven.vercel.app/movies/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <UpdateMovie></UpdateMovie>,
        loader: ({ params }) => fetch(`https://movie-portal-server-seven.vercel.app/movies/${params.id}`)
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
