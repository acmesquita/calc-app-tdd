import React from 'react'
import style from '../../styles/components/button.module.css'

type Props = {
  label: string
}

const Button: React.FC<Props> = ({ label }: Props) => {
  return (
    <button
      className={style.buttonWrapper}
    >
      {label}
    </button>
  )
}

export default Button