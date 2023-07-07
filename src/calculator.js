import { useState } from "react";
import * as math from "mathjs";
import Button from "./components/button";
import Input from "./components/input";
import "./calculator.css";

const Calculator = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
  
    const addToText = (val) => {
      setText((text) => [...text, val]);
    };
  
    const calculateResult = () => {
      const input = text.join(""); 
  
      setResult(math.evaluate(input));
    };
  
    const resetInput = () => {
      setText("");
      setResult("");
    };
  
    const buttonColor = "blue";
  
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input text={text} result={result} />
          <div className="row">
          <Button symbol="C" color="blue" handleClick={resetInput} />
          </div>
          <div className="row">
            <Button symbol="+" color={buttonColor} handleClick={addToText} />
            <Button symbol="-" color={buttonColor} handleClick={addToText} />
            <Button symbol="*" color={buttonColor} handleClick={addToText} />
            <Button symbol="/" color={buttonColor} handleClick={addToText} />
          </div>
          <div className="row">
            <Button symbol="7" handleClick={addToText} />
            <Button symbol="8" handleClick={addToText} />
            <Button symbol="9" handleClick={addToText} />
          </div>
          <div className="row">
            <Button symbol="4" handleClick={addToText} />
            <Button symbol="5" handleClick={addToText} />
            <Button symbol="6" handleClick={addToText} />
            
          </div>
          <div className="row">
            <Button symbol="1" handleClick={addToText} />
            <Button symbol="2" handleClick={addToText} />
            <Button symbol="3" handleClick={addToText} />
            
          </div>
          <div className="row">
            <Button symbol="." handleClick={addToText} />
            <Button symbol="0" handleClick={addToText} />
            <Button symbol="=" handleClick={calculateResult} />
          </div>
          
        </div>
      </div>
    );
  };

  export default Calculator;