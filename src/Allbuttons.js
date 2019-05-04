import React, { Component } from 'react';
import Button from './Button'
import './Allbuttons.css'

class Allbuttons extends Component {
  clickHandler = (x) =>{
      this.props.calculate(x);
    }
  render() {    
    const operators = ["C","+/-","%","÷","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="]

    return (
      <div className="buttonContainer">
        {operators.map((e,index)=>{
          return <Button key={index} clickHandler={this.clickHandler} operator={e} />
        })}
        
      </div>
    );
  }
}

export default Allbuttons;
