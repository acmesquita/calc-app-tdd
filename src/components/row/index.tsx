import React from 'react'
import style from '../../styles/components/row.module.css'

type Props = {
  children: any
}

const Row: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={style.rowWrapper}>
      {children}
    </div>
  )
}

export default Row