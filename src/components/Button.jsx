import React from 'react'
import styles from "./Button.module.css"

const Button = ({children,color,size,func}) => {
  return (
    <div>
      <button data-testid="custom-button" className={`${styles[color]} ${styles[size]}`}
      onClick={func}
      >{children}</button>
    
    </div>
  )
}

export default Button
