import React from "react";
import './styles.scss';
import PropTypes from 'prop-types'
const Toggler = (props) => {
    const {opened, onButtonClick} =props;
    const classToApply = opened ? 'toggler toggler--open' : 'toggler' ;
 return(
    <button onClick={onButtonClick} type ="button" className={classToApply}> = </button>
    )
}

Toggler.propTypes ={
    opened:PropTypes.bool.isRequired,
    onButtonClicl:PropTypes.func.isRequired,
}

export default Toggler;