import React from 'react';
import './App.css';
import store from './redux/store'
import CakeContainer from '../src/components/cakeContainer'
import HooksCakeContainer from '../src/components/hooksCakeContainer'
import IceCreamContainer from '../src/components/iceCreamContainer'
import { Provider } from'react-redux'

function App() {
  return (
    /**
     * we will pass store={store} props in Provider component
     * This is the way through which provider component know about our redux store
     * as we need to provide this store to our react application
     */
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer></HooksCakeContainer>
        <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
      </div>
    </Provider>
  );
}

export default App;