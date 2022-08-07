import { Link } from 'react-router-dom'
import s from './HelpAffectedPeople.module.css'
import pic1 from './../../assets/img/housekey.jpg'
import help from './../../assets/img/help.jpg'
import '../../App.css'

const HelpAffectedPeople = () => {
   return (
      <div>
         <h1 className={s.h1}>Допомогти постраждалим</h1>
         <div className={s.cards}>
            <div className={s.card__item}>
               <img className={s.cardPic} src={pic1} alt="Житло" />
               <div className='linkContainer'>
                  <Link className='link' to='/providehome'>Надати / Отримати житло</Link>
               </div>
            </div>
            <div className={s.card__item}>
               <img className={s.cardPic} src={help} alt="Гуманітарна допомога" />
               <div className='linkContainer'>
                  <Link className='link' to='/humanitarianhelp'>Надати гуманітарну допомогу</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HelpAffectedPeople