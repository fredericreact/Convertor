// == Import npm
import React, {useState} from 'react';


import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import './styles.scss'

import data from '../../data/currencies';

// == Composant
const App = () => {

  const [isExpanded, setExpanded] =useState(true);

  function  expand (){
    setExpanded(!isExpanded);
     
    }
    
return(
  <div className="app">
     <Header baseAmount={1}/>
     <button type="button" onClick={expand}> Toggle </button>
    {
    isExpanded && <Currencies currencies={data}/>
  }
    <Amount amount={1.09} currency="USD"/>
    
  </div>
  );
};

// == Export
export default App;