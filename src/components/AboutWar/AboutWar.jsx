import { Link } from 'react-router-dom'
import EnemyLosses from '../EnemyLosses/EnemyLosses'
import s from './AboutWar.module.css'
import '../../App.css'
import React from 'react'

const AboutWar = () => {
   return (
      <React.Fragment>
         <h1 className={s.title}>Про війну</h1>
         <h2 className={s.content}>Росія з весни 2021 року нарощувала війська біля українського кордону і на території Білорусі. Ударне угруповання сягнуло щонайменше 150 тисяч.

            Розвідки США і Британії попереджали, що президент Росії Володимир Путін готує масштабне вторгнення, щоб змістити законно обрану владу України.

            24 лютого Росія напала на Україну по всій довжині спільного кордону, з території Білорусі й окупованого Криму.

            Армія Росії обстріляла прикордонні застави, завдала удари з повітря по понад 40 об'єктах військової інфраструктури майже усіх регіонів України. Розпочався рух танкових колон і живої сили.

            Путін назвав це «спецоперацією» з метою «демілітаризації і денацифікації України».

            Армія України, Нацгвардія, поліція, Тероборона чинять запеклий опір.

            Детальніше <a target='_blank' className={s.link} href="https://www.radiosvoboda.org/a/rosiya-ukrayina-zahroza-viyny/31703318.html">по посиланню</a>
         </h2>
         <div className='linkContainer'>
            <Link className='link' to='/enemylosses'>Подивитись актуальні втрати ворога</Link>
         </div>
      </React.Fragment>
   )
}

export default AboutWar