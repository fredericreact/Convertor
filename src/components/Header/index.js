import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';

const Header = (props) => {
const {baseAmount, onInputChange} = props;
  return(

  <div className="header">
    <h1 className="header-title">Convertor</h1>
    <p className="header-amount">
    <input 
    type="number" 
    value ={baseAmount}
    onChange={(evt) => {
      onInputChange(+evt.target.value);
    }}
    />
     euro
     </p>
  </div>
  )
};


Header.propTypes={
  baseAmount:PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

export default Header;

