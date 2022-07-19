import React, { useEffect, useState } from 'react'
import TableCoins from '../components/TableCoins'
import { GET_DATA_CRYPTO } from 'services/GET_DATA_CRYPTO'

const CryptosInfo = () => {
  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    GET_DATA_CRYPTO()
    .then(setCoin)
    .catch(console.log)
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
