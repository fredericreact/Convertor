// == Import npm
import React, {useState} from 'react';


import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Toggler from '../Toggler';
import './styles.scss'

import data from '../../data/currencies';

// == Composant
const App = () => {


  const [isExpanded, setExpanded] =useState(
    {
    opened:true,
  baseAmount:3.28,
  currency:'USD',
  });


  const expand = () =>  {
    setExpanded({
      ...isExpanded,
      opened:!isExpanded.opened});
     
    }
    
  const makeConversion = () => {

  
    const result = 1.09 * isExpanded.baseAmount ;
    const rounded = Math.round(result*100)/100;
    return rounded;

  }


return (
  <div className="app">
    <Header baseAmount={isExpanded.baseAmount}/>
    <Toggler opened={isExpanded.opened} onButtonClick={expand}/>
    {
    isExpanded.opened && <Currencies currencies={data}/>
    }
    <Amount amount={makeConversion()} currency="USD"/>
  </div>
  );
};

// == Export
export default App;