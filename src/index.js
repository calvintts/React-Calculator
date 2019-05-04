import React, { Component } from 'react';
import { render } from 'react-dom';
import Output from './Output';
import Allbuttons from './Allbuttons';
import './container.css';
const initialState = {
      outputValue:"0",
      calculateValue:[],
      currentOperator:"",
    }
class App extends Component {
    state = initialState
    handleCalculate = (x) => {
    const operator = "+-x÷"
    console.log(this.state.calculateValue)
    if(operator.includes(x))
    {
      const currentInput = [...this.state.calculateValue]
      if(operator.includes(currentInput[currentInput.length-1]))
       {
         currentInput.splice(-1,1,x)
       }
       else{
         x=x=="x"?"*":x=="÷"?"/":x
         currentInput.push(this.state.outputValue)
         currentInput.push(x)
       }

      this.setState({
        currentOperator:x,
        calculateValue:currentInput,
        outputValue:"",})
    }
    if(!isNaN(x)||x===".")
    {
      this.setState({
        outputValue:this.state.outputValue==="0"?`${x}`:`${this.state.outputValue}${x}`,
      })
    }
    if(x=='=')
    {
      let op =  this.state.currentOperator
      let beforeValue = this.state.calculateValue
      beforeValue.push(this.state.outputValue)
      if("+-*/".includes(beforeValue[-1]))
        beforeValue.splice(-1,1)
      console.warn(beforeValue)
      let realValue = beforeValue.join("")=="0/0"?0:eval(beforeValue.join(""))
      this.setState({
        calculateValue:[],
        outputValue:parseFloat(realValue),
      })
    }
    if(x=='+/-')
    {
      this.setState({
        outputValue:this.state.outputValue*-1,
      })
    }
    if(x=='C')
    {
      this.setState(
        initialState
      )
    }

  }


  render() {
    return (
      <div className="html_container">
        <h1>Calvin's First React App</h1>
        <div className="container">
          <Output showVal={this.state.outputValue}/>
          <Allbuttons calculate={this.handleCalculate}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
