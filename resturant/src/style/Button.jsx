import React from 'react'
import {Button,All} from "./Button.styled"
import '../App.css'
const ButtonD= () => {
  return (
    <All className='btn-div'>
      <Button>Primary Button</Button>
      <Button>Default Button</Button>
      <Button>Dashed Button</Button>
      <Button>Text Button</Button>
      <Button>Link Button</Button>
    </All>
  )
}

export default ButtonD;