import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import appReducer from './state/appReducer';

const initialState = {
  pokemon: [],
  abilities: [],
  moves: [],
  trainers: [],
  encounters: [],
  types: [],
  items: [],
}

// Create store
const store = configureStore(
  {
    reducer: appReducer,
  },
);
console.log(store.getState())

const rootNode = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

