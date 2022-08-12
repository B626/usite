import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveOption } from '../../../../redux/slices/helpUkrainianForcesSlice'

function ProvideHomeSelect() {
   const imOrder = useSelector((state) => state.imOrder.imOrder)
   const activeOption = useSelector((state) => state.imOrder.activeOption)
   const dispatch = useDispatch()

   const Options = imOrder.map((e, index) => <option key={index} value={e.cityRegion}>{e.cityRegion}</option>)

   const handleChange = (e) => {
      dispatch(setActiveOption(e.target.value))
      console.log(e.target.value)
   }
   return ( 
      <div>
         <select value={activeOption} onChange={e => handleChange(e)} name="" id="">
            <option disabled selected value="">Виберіть місто/область</option>
            {
               Options
            }
         </select>
      </div>
   )
}

export default ProvideHomeSelect   