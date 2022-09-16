import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';


const Currencies = (props) => {
  const {currencies} = props;
return(
  <div className='currencies'>
  <div className='currencies-title'>
    Currencies
    </div>
    <ul className='currencies-list'>

{
  currencies.map(currencyObject=>
  <li key={currencyObject.name} className='currency'>{currencyObject.name}</li>


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

};

export default Currencies;