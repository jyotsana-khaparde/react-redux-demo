import React from 'react';
import './App.css';
import store from './redux/store'
import CakeContainer from '../src/components/cakeContainer'
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
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;