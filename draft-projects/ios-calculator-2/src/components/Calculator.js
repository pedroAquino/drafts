import React, { useState } from 'react';
import CalcDisplay from './CalcDisplay';
import CalcButtonLine from './CalcButtonLine';
import CalcButton from './CalcButton';
import pipe from 'ramda/src/pipe';
import dropLast from 'ramda/src/dropLast';

const Calculator = ({ expression, onClickCalcButton }) => (
  <div className="calc">
    <CalcDisplay text={expression} />
    <div className="calc__buttons">
      <CalcButtonLine>
        <CalcButton text="C" onClick={onClickCalcButton} className="calc__button--bg-light-black"  />
        <CalcButton text="AC" onClick={onClickCalcButton} className="calc__button--bg-light-black" />
        <CalcButton text="+/-"  onClick={onClickCalcButton} className="calc__button--bg-light-black" />
        <CalcButton text="÷"  onClick={onClickCalcButton} className="calc__button--bg-orange" />
      </CalcButtonLine>
      <CalcButtonLine>
        <CalcButton text="7" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="8" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="9" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="x" onClick={onClickCalcButton} className="calc__button--bg-orange" />
      </CalcButtonLine>
      <CalcButtonLine>
        <CalcButton text="4" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="5" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="6" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="-" onClick={onClickCalcButton} className="calc__button--bg-orange" />
      </CalcButtonLine>
      <CalcButtonLine>
        <CalcButton text="1" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="2" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="3" onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="+" onClick={onClickCalcButton} className="calc__button--bg-orange" />
      </CalcButtonLine>
      <CalcButtonLine>
        <CalcButton text="0" onClick={onClickCalcButton} className="calc__button--bg-dark-gray calc__button--bigger" />
        <CalcButton text="." onClick={onClickCalcButton} className="calc__button--bg-dark-gray" />
        <CalcButton text="=" onClick={onClickCalcButton} className="calc__button--bg-orange" />
      </CalcButtonLine>
    </div>
  </div>
);

// constants
const OPERATIONS = {
  '+': (...numbers) => numbers.reduce((acc, item) => acc + item, 0),
  'x': (...numbers) => numbers.reduce((acc, item) => acc * item, 1),
  '-': (...numbers) => numbers.reduce((acc, item) => acc === 0 ? (acc - item) * -1 : acc - item, 0),
  '÷': (...numbers) => numbers.reduce((acc, item, index) => index === 0 ? item / acc : acc / item, 1)
};

const ACTIONS = {
  '=': expression => pipe(
    splitExpression,
    parseExpression, 
    calculateExpression
  )(expression),
  'C': expression => dropLast(1, expression),
  'AC': () => '0',
  '+/-': (expression) => {
    return parseExpression(expression)
      .map((item, index, arr) => isNumber(item) && arr[index - 1] != '+' ? item * -1 : item)
      .join('')
  }
};

// helpers
const isNumber = number => !isNaN(number);

const isOperation = button => !!OPERATIONS[button];

const sanitizeExpression = button => expression => { 
  return expression === '0' ? button : expression + button;
}

const splitExpression = expression => {
  const splited = expression.split('');
  
  if (isOperation(splited[0])) {
    const [op, number, ...other] = splited;
    return [
      op + number,
      ...other
    ];
  } else {
    return splited;
  }

};

const parseExpression = splitedExpression => {
  let result = [];
  let numbers = [];
  let counter = 0;

  while (counter < splitedExpression.length) {
    const item = splitedExpression[counter];
    
    if(isNumber(item)) {
      numbers.push(item)
    } else {
      result.push(Number(numbers.join('')));
      result.push(item)
      numbers = [];
    }
    counter++;
  }

  if (numbers.length) {
    result.push(Number(numbers.join('')));
  }

  return result;
};

const calculateExpression = parsed => {  
  let result = 0;
  let currentOperation = null;
  let counter = 0;

  while (counter < parsed.length) {
    const item = parsed[counter];
    
    if (isNumber(item)) {
      result = !currentOperation ? item : currentOperation(result, item);
    }

    if (isOperation(item)) {
      currentOperation = OPERATIONS[item];
    }

    counter++;
  }
  return result;
};


const CalculatorContainer = () => {

  const [expression, setExpression] = useState('0');

  const onClickCalcButton = button => {
    const action = ACTIONS[button];

    if (action) {
      pipe(
        action,
        setExpression
      )(expression);
      return;
    }

    pipe(
      sanitizeExpression(button),
      setExpression
    )(expression);
  };

  return <Calculator 
    expression={expression}
    onClickCalcButton={onClickCalcButton}
  />
}

export default CalculatorContainer;