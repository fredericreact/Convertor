import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types';

const Header = (props) => {
const {baseAmount} = props;
  return(

  <div className="header">
    <h1 className="header-title">Convertor</h1>
    <p className="header-amount">{baseAmount} euro</p>
  </div>
  )
};


Header.propTypes={
  baseAmount:PropTypes.number.isRequired,
}

export default Header;

