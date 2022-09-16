// == Import npm
import React from 'react';


import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import './styles.scss'

// == Composant
const App = () => (
  <div className="app">
     <Header />
    <Currencies />
    <Amount />
    
  </div>
);

// == Export
export default App;