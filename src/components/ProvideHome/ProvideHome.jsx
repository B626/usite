import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveRadio } from '../../redux/slices/helpImmigrantsSlice'
import ProvideHomeForm from './ProvideHomeForm/ProvideHomeForm'
import ProvideHomeSelect from './ProvideHomeForm/ProvideHomeSelect/ProvideHomeSelect'

function ProvideHome() {
  const activeRadio = useSelector((state) => state.imOrder.activeRadio)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setActiveRadio(e.target.value))
    console.log(activeRadio)
  }
  return (
    <div>
      <h2>Ви хочете</h2>
      <div>
        <p><input onChange={e => handleChange(e)} selected={activeRadio} value='give' type="radio" name='home' />Надати житло</p>
        <p><input onChange={e => handleChange(e)} selected={activeRadio} value='get' type="radio" name='home' />Знайти житло</p>
      </div>
      <h2>
        {
          activeRadio === 'give' ? activeRadio && 'Надати житло' : activeRadio && 'Знайти житло'
        }
      </h2>
      {activeRadio && <ProvideHomeForm />}
      <h2>
        {
          activeRadio === 'give' ? activeRadio && 'Виберіть місто/область де знаходиться житло яке ви надаєте переселенцю/переселенцям' : activeRadio && 'Виберіть місто/область де ви шукаєте житло'
        }
      </h2>
      {activeRadio && <ProvideHomeSelect />}
    </div>
  )
}

export default ProvideHome