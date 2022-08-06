import { Link } from 'react-router-dom';
import s from './Main.module.css'
import '../../App.css'

const Main = () => {
   return (
      <div className={s.contentWrapper}>
         <div className={s.content}>
            <h1 className={s.title}>Разом до перемоги</h1>
            <div className={s.links}>
               <div className='linkContainer'>
                  <Link className='link' to='/helpaffectedpeople'>Допомогти постраждалим</Link>
               </div>
               <div className='linkContainer'>
                  <Link className='link' to='/helpukrainianforces'>Допомогти ЗСУ</Link>
               </div>
            </div>
         </div>
      </div>

   )
}

export default Main