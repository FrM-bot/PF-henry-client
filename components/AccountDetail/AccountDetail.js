import React from 'react'
import Image from 'next/image'

import style from './AccountDetail.module.css'

import creditCard from '../../assets/img/creditCard.png'
import transport from '../../assets/icons/transport.svg'
import shopping from '../../assets/icons/shopping.svg'
import subscriptions from '../../assets/icons/subscriptions.svg'
import groceries from '../../assets/icons/groceries.svg'

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
            <li><Image src={shopping} />
              <div>
                <h4>Shopping</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><Image src={subscriptions} />
              <div>
                <h4>Subscriptions</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><Image src={groceries} />
              <div>
                <h4>Groceries</h4>
                <p>$182,95</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
