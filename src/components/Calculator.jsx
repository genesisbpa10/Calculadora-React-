import React from 'react'
import { useState } from 'react';
import {evaluate} from 'mathjs';
import Logo from '../logo.png'
import Button from './Button'
import Input from './Input'
import ClearButton from './ClearButton';

const Calculator = () => {

    const [input, setInput] = useState('');

    const addInput = value => {
    setInput(input + value);
    };
  
    const calculateResult = () => {
    if(input) {
      setInput(evaluate(input));
    }else{
      alert('Por favor, ingrese valores para realizar los cálculos')
    }
  };
  
    return(
     <div className='App'>
       <div className="title-container">
         <img 
         src={Logo}
         alt='Logo'
         className='logo'
         />
       </div>
       <div className="calculator-container">
         <Input input={input} />
         <div className="row">
           <Button handleClick={addInput}>1</Button>
           <Button handleClick={addInput}>2</Button>
           <Button handleClick={addInput}>3</Button>
           <Button handleClick={addInput}>+</Button>
           </div>
         <div className="row">
            <Button handleClick={addInput}>4</Button>
           <Button handleClick={addInput} >5</Button>
           <Button handleClick={addInput}>6</Button>
           <Button handleClick={addInput}>-</Button></div>
         <div className="row">
           <Button handleClick={addInput}>7</Button>
           <Button handleClick={addInput}>8</Button>
           <Button handleClick={addInput}>9</Button>
           <Button handleClick={addInput}>*</Button>
         </div>
         <div className="row">
           <Button handleClick={calculateResult}>=</Button>
           <Button handleClick={addInput}>0</Button>
           <Button handleClick={addInput}>.</Button>
           <Button handleClick={addInput}>/</Button>
           </div>
         <div className="row">
            <ClearButton handleClear={() => setInput('')}>
              CLEAR 
            </ClearButton>
         </div>
       </div>
     </div>
   );
};

export default Calculator