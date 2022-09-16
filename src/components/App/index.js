// == Import npm
import React from 'react';


import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import './styles.scss'

import data from '../../data/currencies';

// == Composant
const App = () => (
  <div className="app">
     <Header baseAmount={1}/>
    <Currencies currencies={data}/>
    <Amount amount={1.09} currency="USD"/>
    
  </div>
);

// == Export
export default App;