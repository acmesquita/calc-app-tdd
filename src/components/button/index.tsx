import React from 'react'
import style from '../../styles/components/button.module.css'

type Props = {
  label: string
  onClick: (label: string) => void
}

const Button: React.FC<Props> = ({ label, onClick }: Props) => {
  return (
    <button
      className={style.buttonWrapper}
      data-testid={`btn-${label}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}

export default Button