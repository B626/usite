import React from 'react'

function ProvideHomeForm() {
   return (
      <div>
         <div>
            <div>
               <input type="text" placeholder='Ваш ПІБ' />
            </div>
            <div>
               <input type="text" placeholder='Номер вашого телефону' />
            </div>
            <div>
               <input type="text" placeholder='Ваша електронна пошта' />
            </div>
            <div>
               <input type="password" placeholder='Пароль' />
            </div>
         </div>
      </div>
   )
}

export default ProvideHomeForm