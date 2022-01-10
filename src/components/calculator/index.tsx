import React from "react";
import {Button, Display, Row} from '../index'
import style from '../../styles/components/calculator.module.css'

const Calculator: React.FC = () => {
  
  return (
    <div className={style.contentWrapper}>
      <div className={style.calculatorWrapper}>
        <Row>
          <Button label="AC"/>
          <Display />
        </Row>
        <Row>
          <Button label="7"/>
          <Button label="8"/>
          <Button label="9"/>
          <Button label="+"/>
        </Row>
        <Row>
          <Button label="4"/>
          <Button label="5"/>
          <Button label="6"/>
          <Button label="-"/>
        </Row>
        <Row>
          <Button label="1"/>
          <Button label="2"/>
          <Button label="3"/>
          <Button label="/"/>
        </Row>
        <Row>
          <Button label="0"/>
          <Button label="."/>
          <Button label="="/>
          <Button label="*"/>
        </Row>
      </div>
    </div>
  )
}

export default Calculator;
