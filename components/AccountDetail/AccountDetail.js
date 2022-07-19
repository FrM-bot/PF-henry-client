import React from 'react'
import Image from 'next/image'

import style from './AccountDetail.module.css'

import creditCard from '../../assets/img/creditCard.png'

export default function AccountDetail () {
  return (
    <div className={style.detailContainer}>
      <h2 className={style.title}>My card</h2>
      <div className={style.cardContainer}>
        <div className={style.creditCardImage}><Image src={creditCard} /></div>
        <div className={style.textContainer}>
          <h3>Balance</h3>
          <p>$12,786.76</p>
        </div>
      </div>
    </div>
  )
}
