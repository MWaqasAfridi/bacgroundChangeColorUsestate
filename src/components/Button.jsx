import React from 'react'

const Button = ({ textName, background, setColor }) => {
  return (
    <div>
    <button style={{ background: background }} onClick={() => setColor(background)} 
    className={`border rounded-md p-1 text-white m-1`}>{textName}</button>
    </div>
  )
}

export default Button;