import React from 'react'
import style from '../../styles/components/display.module.css'

type Prop = {
  value: string
}

const Display: React.FC<Prop> = ({ value }: Prop) => {
  return (
    <div className={style.displayWrapper} data-testid="display">
      {value}
    </div>
  )
}

export default Display