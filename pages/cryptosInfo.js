import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableCoins from '../components/TableCoins'

const CryptosInfo = () => {
  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState('')

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
      <div>
        <input type="text" placeholder='buscar cryptos' onChange={(e) => { setSearch(e.target.value) }}></input>
       <h1>Crypto markets</h1>
       <TableCoins coins={coin} search={search}/>
      </div>
  )
}

export default CryptosInfo
