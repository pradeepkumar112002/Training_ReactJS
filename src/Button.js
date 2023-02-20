import React from "react";
import PropTypes from "prop-types";


const Button = (props) => {
  return (
    <button
    type={props.type}
    className={props.className}
    onClick={props.onClick}>
    {props.value}
  </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;