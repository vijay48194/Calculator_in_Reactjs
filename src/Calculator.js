import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: ""
    };
  }
  handleClick(btnVal) {
    var curr = this.state.exp;
    if (btnVal === "=") {
      this.setState({ exp: String(eval(curr)) });
    }
    else if (btnVal === "C") {
      this.setState({ exp: "" });
    }
    else {
      this.setState({
        exp: curr + btnVal
      });
    }
  }
  render() {
    return (
      <div><h1>Calculator</h1>
        <p>{this.state.exp}</p>
        <button onClick={() => { this.handleClick(7); }}>7</button>
        <button onClick={() => { this.handleClick(8); }}>8</button>
        <button onClick={() => { this.handleClick(9); }}>9</button>
        <button onClick={() => { this.handleClick('/'); }}>/</button>
        <br></br>
        <button onClick={() => { this.handleClick(4); }}>4</button>
        <button onClick={() => { this.handleClick(5); }}>5</button>
        <button onClick={() => { this.handleClick(6); }}>6</button>
        <button onClick={() => { this.handleClick('*'); }}>*</button>
        <br></br>
        <button onClick={() => { this.handleClick(1); }}>1</button>
        <button onClick={() => { this.handleClick(2); }}>2</button>
        <button onClick={() => { this.handleClick(3); }}>3</button>
        <button onClick={() => { this.handleClick('-'); }}>-</button>
        <br></br>
        <button onClick={() => { this.handleClick("."); }}>.</button>
        <button onClick={() => { this.handleClick(0); }}>0</button>
        <button onClick={() => { this.handleClick('='); }}>=</button>
        <button onClick={() => { this.handleClick('+'); }}>+</button>
        
        <br></br>
        
       
        <button onClick={() => { this.handleClick("C"); }}>C</button>
      </div>
    );
  }
}
export default Calculator;