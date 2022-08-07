import React from 'react'

function ProvideHomeFormSettler() {
   return (
      <div>
         <h1>Знайти житло</h1>
         <div>
            <input type="text" placeholder='Ваш ФІБ' />
            <input type="text" placeholder='Номер вашого телефону' />
            <input type="text" placeholder='Ваша електронна пошта' />
            <select name="" id="">
               <option disabled value="">Виберіть місто/область</option>
               <option value="">Київ/Київська область</option>
               <option value="">Дніпропетровськ/Дніпропетровська область</option>
               <option value="">Одеса/Одеська область</option>
               <option value="">Львів/Львівська область</option>
               <option value="">Кривий ріг/Криворізька область</option>
               <option value="">Вінниця/Вінницька область</option>
               <option value="">Чернігів/Чернігівська область</option>
               <option value="">Полтава/Полтавська область</option>
               <option value="">Хмельницький/Хмельницька область</option>
               <option value="">Черкаси/Черкаська область</option>
               <option value="">Чернівці/Чернівська область</option>
               <option value="">Житомир/Житомирська область</option>
               <option value="">Рівне/Рівненська область</option>
               <option value="">Івано-Франківськ/Івано-Франківська область</option>
               <option value="">Кропивницький/Кропивницька область</option>
               <option value="">Тернопіль/Тернопільска область</option>
               <option value="">Луцьк/Луцька область</option>
            </select>
         </div>
      </div>
   )
}

export default ProvideHomeFormSettler