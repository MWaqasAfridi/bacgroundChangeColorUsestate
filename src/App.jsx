import React from 'react'
import { useState } from 'react'
import Button from './components/Button'
const App = () => {
  const [color, setColor] = useState("white")
  return (
    <>
      <div className='w-full h-screen duration-150'
        style={{ background: color }}
      >
        <div className='flex justify-center items-center h-lvh'>
          <Button textName="red" background="red" setColor={setColor}/>
          <Button textName="blue" background="blue" setColor={setColor}/>
          <Button textName="green" background="green" setColor={setColor}/>
          <Button textName="purple" background="purple" setColor={setColor}/>
          <Button textName="orange" background="orange" setColor={setColor}/>
          <Button textName="pink" background="pink" setColor={setColor}/>
          <Button textName="brown" background="brown" setColor={setColor}/>
          <Button textName="black" background="black" setColor={setColor}/>

        </div>


      </div>
    </>
  )
}

export default App