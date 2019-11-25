import React, { Component } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';
import '../Branding/Branding.css';

class Calculator extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in number <Keys />
    numbers: ['7', '8', '9', '4', '5', '6', '3', '2', '1', '.', '0','ce'],
    // values to be displayed in operator <Keys />
    operators: ['/', 'x', '-', '+'],
    // operator selected for math operation
    selectedOperator: '',
    // stored value to use for math operation
    storedValue: '',
  }

  callOperator = () => {
    console.log('call operation');
  }

  setOperator = () => {
    console.log('set operation');
  }

  updateDisplay = () => {
    console.log('update display');
  }

  render = () => {
    // unpack the component state by using Object Destructuring
    const { displayValue, numbers, operators } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
        <p className="branding-container">
          EExpertsCalc
          <p className="logo-container">
            <img src={process.env.PUBLIC_URL + '/Equal-Experts-Apple-Touch-Icon-72.png'} />
          </p>
        </p>
      </div>
    );
  }
}

export default Calculator;
