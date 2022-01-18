import React, { useState } from "react";
import {Button, Display, Row} from '../index'
import style from '../../styles/components/calculator.module.css'
import { Calculate } from "../../models/calculate";

const MAX_LENGTH_DISPLAY = 14

const Calculator: React.FC = () => {
  const [value, setValue] = useState("")
  
  function handleClick(label: string) {
    switch (label) {
      case 'AC':
        setValue('')
        break;
      case '=':
        const calc = new Calculate()
        setValue(calc.evaluate(value))
        break;
      default:
        if(value.length === MAX_LENGTH_DISPLAY) return
        setValue(old => `${old}${label}`)
        break;
    }    
  }

  return (
    <div className={style.contentWrapper}>
      <div className={style.calculatorWrapper}>
        <Row>
          <Button onClick={handleClick} label="AC"/>
          <Display value={value} />
        </Row>
        <Row>
          <Button onClick={handleClick} label="7"/>
          <Button onClick={handleClick} label="8"/>
          <Button onClick={handleClick} label="9"/>
          <Button onClick={handleClick} label="+"/>
        </Row>
        <Row>
          <Button onClick={handleClick} label="4"/>
          <Button onClick={handleClick} label="5"/>
          <Button onClick={handleClick} label="6"/>
          <Button onClick={handleClick} label="-"/>
        </Row>
        <Row>
          <Button onClick={handleClick} label="1"/>
          <Button onClick={handleClick} label="2"/>
          <Button onClick={handleClick} label="3"/>
          <Button onClick={handleClick} label="/"/>
        </Row>
        <Row>
          <Button onClick={handleClick} label="0"/>
          <Button onClick={handleClick} label="."/>
          <Button onClick={handleClick} label="="/>
          <Button onClick={handleClick} label="*"/>
        </Row>
      </div>
    </div>
  )
}

export default Calculator;
