import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/error-page';
import Abilities from "./routes/abilities/abilities";
import Encounters from "./routes/encounters/encounters";
import Items from "./routes/items/items";
import Moves from "./routes/moves/moves";
import Pokemon from './routes/pokemon/pokemons';
import Root from './routes/root';
import Trainers from "./routes/trainers/trainers";
import Types from "./routes/types/types";
import { themeOptions } from "./styles/theme-options";
import pokemonSlice from './state/reducers/pokemonReducer';
import parsePokemonFile from './parsers/pokemon-parser';
import { useDispatch } from 'react-redux';

// const theme = createTheme(themeOptions);
const theme = createTheme(themeOptions);


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
  const dispatch = useDispatch();

  useEffect(() => {
    async function getPokemon() {
      const list = await parsePokemonFile('/test-pokemon-file.txt');
      dispatch(pokemonSlice.actions.setPokemon(list));
    }

    getPokemon();
  }, []);


  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
export default App;   