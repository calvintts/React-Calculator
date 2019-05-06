import React, { Component } from 'react';
import { render } from 'react-dom';
import Output from './consolePanel/Output';
import Allbuttons from './Allbuttons/Allbuttons';
import './container.css';

    const initialState = {
            outputValue:0,
            currentValue:0,
            calculateValue:0,
            currentOperator:"",
        }

    const operators = "+-x÷"
    class App extends Component {
        state = initialState
        handleCalculate = (val2,val1,ops) => {
            console.log(ops)
            console.log(typeof(ops))
            return ops=="x"?val1*val2:ops=="÷"?val1/val2:ops=="+"?val1+val2:ops=="-"?val1-val2:0
        }
        handleClick = (x) => {
           if(!isNaN(x)||x==".")
           {
               this.setState({
                   outputValue:this.state.outputValue==0?`${x}`:`${this.state.outputValue.concat(x)}`,
                   currentValue:this.state.outputValue==0?`${x}`:`${this.state.outputValue.concat(x)}`,
               })
           }
           if(operators.includes(x))
           {
               if(this.state.currentValue!=0&&this.state.calculateValue!=0)
               {
                   const tempValue = new Number(this.state.outputValue)
                   this.setState({
                       currentValue:tempValue,
                       outputValue: 0,
                       currentOperator:x,
                   })
               }
               else
               {
                   this.setState({
                           calculateValue:new Number(this.state.currentValue),
                            outputValue:0,
                            currentOperator:x,
                       }
                   )
               }
           }
           if(x=="=")
           {
               if(this.state.currentValue!=0&&this.state.calculateValue!=0)
               {
                   this.setState({
                       calculateValue:this.handleCalculate(parseFloat(this.state.currentValue), parseFloat(this.state.calculateValue), this.state.currentOperator),
                       outputValue: this.handleCalculate(parseFloat(this.state.currentValue), parseFloat(this.state.calculateValue), this.state.currentOperator),
                   })
               }

           }
           if(x=="+/-")
           {
               this.setState({
                   calculateValue:this.state.outputValue*-1,
                   outputValue: this.state.outputValue*-1,
               })
           }
           if(x=="C")
            {
                this.setState(initialState)
            }
            if(x=="%")
            {
                this.setState({
                    calculateValue:this.state.outputValue/100,
                    outputValue: this.state.outputValue/100,
                })
            }
      }


      render() {
        return (
          <div className="html_container">
            <h1>Calvin's First React App</h1>
            <div className="container">
              <Output showVal={this.state.outputValue}/>
              <Allbuttons calculate={this.handleClick}/>
            </div>
          </div>
        );
      }
    }

render(<App />, document.getElementById('root'));
