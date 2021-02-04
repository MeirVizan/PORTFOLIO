import React, {createContext} from 'react';
import { BrowserRouter } from "react-router-dom";
import { useLocalStore, useObserver } from "mobx-react";
import './App.scss';
import GeneralStore from "./Stores/GeneralStore";
import HomeScreen from './Pages/Home';


const StoreContext = createContext();


const StoreProvider = ({ children }) => {

  const General = useLocalStore(() => GeneralStore);
  const store = {General}

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};


function App() {
  return useObserver(() =>
  <StoreProvider>
    <BrowserRouter>
        <HomeScreen/>
    </BrowserRouter>
  </StoreProvider>
  
  );
}

export default App;
