import React from 'react';
import './App.css';
import store from './redux/store'
import CakeContainer from '../src/components/cakeContainer'
import HooksCakeContainer from '../src/components/hooksCakeContainer'
import IceCreamContainer from '../src/components/iceCreamContainer'
import ItemContainer from '../src/components/itemContainer'
import ClickCounter from '../src/components/clickCounter'
import HoverCounter from '../src/components/hoverCounter'
import ParentComp from '../src/components/parentComp'
import RefsDemo from '../src/components/refsDemo'
import FocusInputComponent from '../src/components/focusInput'
import FRParentInput from '../src/components/FRParentInput'
import PortalDemo from '../src/components/portalDemo'
import { Provider } from'react-redux'

function App() {
  return (
    /**
     * we will pass store={store} props in Provider component
     * This is the way through which provider component know about our redux store
     * as we need to provide this store to our react application.
     * The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
     * Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.
     * Normally, you can’t use a connected component unless it is nested inside of a <Provider>
     */
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer></HooksCakeContainer>
        <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <ItemContainer cake></ItemContainer>
        <ItemContainer></ItemContainer>
        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
        <ParentComp/>
        <RefsDemo/>
        <FocusInputComponent/>
        <FRParentInput/>
        <PortalDemo/>
      </div>
    </Provider>
  );
}

export default App;


//Link for react-router->  https://www.youtube.com/watch?v=Law7wfdg_ls
