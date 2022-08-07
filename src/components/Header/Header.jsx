import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import logo from '../../assets/img/logo.png'

function Header() {
   const setActive = ({isActive}) => isActive ? 'activeLink' : 'navItem'
   return (
      <div>
         <header className={s.header}>
            <div>
               <NavLink to='/'>
                  <img className={s.logo} src={logo} alt="логотип" />
               </NavLink>
            </div>
            <nav>
               <NavLink className={setActive} to='/aboutwar'>Про війну</NavLink>
               <NavLink className={setActive} to='/helpaffectedpeople'>Допомогти постраждалим</NavLink>
               <NavLink className={setActive} to='/helpukrainianforces'>Допомогти ЗСУ</NavLink>
               <NavLink className={setActive} to='/importanthelp'>Чому важливо допомагати</NavLink>
            </nav>
         </header></div>
   )
}

export default Header