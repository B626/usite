import { Link } from "react-router-dom"
import map from '../../assets/img/map.jpg'
import s from './HelpUkrainianForces.module.css'
import { useDispatch, useSelector } from "react-redux"
import { setActiveOption, setOrders } from "../../redux/slices/optionSlice"
import { useEffect } from "react"
import '../../App.css'

const HelpUkrainianForces = (props) => {
   const order = useSelector((state) => state.order.order)
   const activeOption = useSelector((state) => state.order.activeOption)
   const dispatch = useDispatch()
   function onSelectChange(e) {
      dispatch(setActiveOption(e.target.value))
      console.log(e.target.value)
   }
   const Options = order.map((e, index) => e.location && <option key={index} value={e.location}>{e.location}</option>)
   const Needs = order.map(e => e.location === activeOption && <h2 className={s.h2}>{e.need} в кількості: {e.amount}</h2>)
   const Prices = order.map(e => e.location === activeOption && <h2 className={s.h2} >Разом коштують: {e.priceOfUnit * e.amount}грн</h2>)
   const PricesForUnit = order.map(e => e.location === activeOption && <h2 className={s.h2}>Ціна за одну одиницю: {e.priceOfUnit}грн</h2>)
   return (
      <div className={s.app}>
         <div className={s.appBlock}>
            <h2 className={s.h2}>Карта бойових дій</h2>
            <img className={s.mapimg} src={map} alt="Карта бойових дій" />
         </div>
         <div className={s.appBlock}>
            <h1 className={s.h1}>Допомогти ЗСУ</h1>
            <h2 className={s.h2}>Виберіть локацію в якій ви хочете допомогти ЗСУ</h2>
            <select value={activeOption} onChange={e => onSelectChange(e)}>
               <option selected disabled="disabled">Вибрати локацію</option>
               {Options}
            </select>
            {activeOption && <h2 className={s.h2}>В локації {activeOption} ЗСУ потребують:</h2>}
            {activeOption && Needs}
            {activeOption && Prices}
            {activeOption && PricesForUnit}
            {activeOption &&
               <div className="linkContainer">
                  <Link className="link" to='/payforukrainianforces'>Пожертвувати</Link>
               </div>
               }
         </div> 
      </div>
   )
}

export default HelpUkrainianForces
