import React, { Component } from 'react';

const Button = (props)=> {
  const span = props.operator==0? "1/3" : null
  

  const operatorSymbols = "+-x÷="

  const bgColor = !isNaN(parseInt(props.operator, 10))||props.operator=='.'?"#333333":operatorSymbols.includes(props.operator)?"#f5923e":"#a6a6a6"
  const button_style={
      "backgroundColor":bgColor,
      "color":"white",
      "width":"100%",
      "height":"100%",
      "outlineColor":"gray",
    }
  const div_style={
    "gridColumn":span
  }

  const handleClick = () => {
    props.clickHandler(props.operator)
  }

    return (
      <div style={div_style}>
        <button onClick={handleClick} style={button_style} value={props.operator} type="text">{props.operator}</button>
      </div>
    );
}

export default Button;

