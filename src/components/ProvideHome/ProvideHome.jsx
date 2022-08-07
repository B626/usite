import React, { useRef } from 'react'
import ProvideHomeFormLessor from './ProvideHomeFormLessor/ProvideHomeFormLessor'
import ProvideHomeFormSettler from './ProvideHomeFormSettler/ProvideHomeFormSettler'


function ProvideHome() {

  return (
    <div>
      <h2>Ви хочете</h2>
      <div>
        <p><input value='give' type="radio" name='home' />Надати житло</p>
        <p><input value='get' type="radio" name='home' />Отримати житло</p>
      </div>
      {<ProvideHomeFormLessor />}
    </div>
  )
}

export default ProvideHome