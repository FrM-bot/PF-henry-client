import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CryptosInfo = () => {
  // eslint-disable-next-line no-unused-vars
  const [coin, setCoin] = useState([])

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = res.data
    console.log(data)
    setCoin(data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>cryptosInfo</div>
  )
}

export default CryptosInfo
