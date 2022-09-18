import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';


const Currencies = (props) => {
  const {currencies, onCurrencyClick, search, onSearchChange} = props;
return(
  <div className='currencies'>
  <div className='currencies-title'>
    
    <input 
    type="text" 
    placeholder="filter"
    className='currencies-search'
    value={search}
    onChange={ (evt) => {
      const cequiaetetape = evt.target.value;
      onSearchChange(cequiaetetape);
    }}
    />

    </div>
    <ul className='currencies-list'>

{
  currencies.map(currencyObject=>(
  <li 
  onClick={ () => { onCurrencyClick(currencyObject.name);}}
  key={currencyObject.name} 
  className='currency'
  >
  {currencyObject.name}</li>
  )
  )
  
}

      
    </ul>
  </div>
  );
};

Currencies.propTypes = {
  currencies:PropTypes.arrayOf(
    PropTypes.shape({
      name:PropTypes.string.isRequired,
    }),
  ).isRequired,
  onCurrencyClick:PropTypes.func.isRequired,  
  onCurrencyClick:PropTypes.string.isRequired,  
  onSearchChange: PropTypes.func.isRequired,
};

export default Currencies;