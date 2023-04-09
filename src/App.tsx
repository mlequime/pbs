import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './components/error-page';
import Pokemon from './routes/pokemon/pokemons';
import Abilities from "./routes/abilities/abilities";
import Moves from "./routes/moves/moves";
import Types from "./routes/types/types";
import Items from "./routes/items/items";
import Trainers from "./routes/trainers/trainers";
import Encounters from "./routes/encounters/encounters";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/pokemon',
        element: <Pokemon />,
      },
      {
        path: '/abilities',
        element: <Abilities />,
      },
      {
        path: '/moves',
        element: <Moves />,
      },
      {
        path: '/trainers',
        element: <Trainers />,
      },
      {
        path: '/encounters',
        element: <Encounters />,
      },
      {
        path: '/types',
        element: <Types />,
      },
      {
        path: '/items',
        element: <Items />,
      }
    ]
  },

]);

function App() {
  return (

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default App;   