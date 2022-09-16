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
  currency:'United States Dollar',
  });


const {opened,baseAmount,currency} = isExpanded

  const expand = () =>  {
    setExpanded({
      ...isExpanded,
      opened:!isExpanded.opened});
     
    }
    
  const makeConversion = () => {
    const selectedCurrency = data.find((deviseObject) => deviseObject.name===currency);  
    const result = selectedCurrency.rate * baseAmount ;
    const rounded = Math.round(result*100)/100;
    return rounded;

  }


return (
  
  <div className="app">
    <Header baseAmount={baseAmount}/>
    <Toggler opened={opened} onButtonClick={expand}/>
    {
    opened && <Currencies currencies={data}/>
    }
    <Amount amount={makeConversion()} currency={currency}/>
  </div>
  );
};

// == Export
export default App;