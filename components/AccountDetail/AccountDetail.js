import React from 'react'
import Image from 'next/image'

import style from './AccountDetail.module.css'

import creditCard from '../../assets/img/creditCard.png'
import transport from '../../assets/icons/transport.svg'

export default function AccountDetail () {
  return (
    <div className={style.detailContainer}>
      <h2 className={style.title}>My card</h2>
      <div className={style.infoContainer}>
        <div className={style.cardContainer}>
          <div className={style.creditCardImage}><Image src={creditCard} /></div>
          <div className={style.textContainer}>
            <h3>Balance</h3>
            <p>$12,786.76</p>
          </div>
        </div>
        <div className={style.categoriesContainer}>
          <ul className={style.listContainer}>
            <li><Image src={transport} />
              <div>
                <h4>Transport</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><Image src={transport} />
              <div>
                <h4>Transport</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><Image src={transport} />
              <div>
                <h4>Transport</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><Image src={transport} />
              <div>
                <h4>Transport</h4>
                <p>$182,95</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
