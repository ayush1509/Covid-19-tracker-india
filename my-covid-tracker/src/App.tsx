import React from 'react';
import './App.css';
import NavTabs from './Components/NavTabs/NavTabs';
import {Store} from './Store'


function App() {
  const store = React.useContext(Store)
  console.log(store)
  return (
    <div className="App">
      <header>
        <h1>Covid-19 Tracker India</h1>
      </header>
      <NavTabs/>
    </div>
  );
}

export default App;
