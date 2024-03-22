import React from 'react'

interface ButtonProps {
    text: String;
    onClick?: () => void
}

const Button = ({text}: ButtonProps) => {
  return (
    <div className=' font-poppins'>
        <button className=' px-3 py-3 rounded-lg bg-cyan-500 text-white'>{text}</button>
    </div>
  )
}

export default Button