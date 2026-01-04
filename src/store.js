import {configureStore} from '@reduxjs/toolkit';
import carsReducer from './reducers/carsSlice';
import clientsReducer from "./reducers/clientsSlice";
const store = configureStore({
  reducer: {
    cars: carsReducer,
    clients: clientsReducer,
  }
});

export default store;