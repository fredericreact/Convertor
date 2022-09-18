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
      search:'',
    opened:true,
  baseAmount:3.28,
  currency:'United States Dollar',
  });


const {opened,baseAmount,currency, search} = isExpanded

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

  const setCurrency = (newCurrencyName) => {
    setExpanded({
      ...isExpanded,
        currency: newCurrencyName
    })
  }  

  const handleInputChange = (newBaseAmount) => {
    setExpanded({
      ...isExpanded,
        baseAmount: newBaseAmount
    })
  }  

  const handleSearchChange = (cequiaetetape) => {
    setExpanded({
      ...isExpanded,
        search: cequiaetetape
    })
  }

  const getCurrenciesList =() => {
    console.log(search);
    if(search.length >0){

    
    return data.filter((deviseObject)=>{
      const cequiestcherche = search.toLowerCase();
      const nomDeLaDevise = deviseObject.name.toLowerCase();
      return nomDeLaDevise.includes(cequiestcherche);
    });
  }

    return data;

  }

return (
  
  <div className="app">
    <Header baseAmount={baseAmount} onInputChange={handleInputChange}/>
    <Toggler opened={opened} onButtonClick={expand}/>
    {
    opened && <Currencies onSearchChange={handleSearchChange} search={search} onCurrencyClick={setCurrency} currencies={getCurrenciesList()}/>
    }
    <Amount amount={makeConversion()} currency={currency}/>
  </div>
  );
};

// == Export
export default App;