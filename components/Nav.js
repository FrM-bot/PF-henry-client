import React from 'react'
import { useRouter } from 'next/router'
import style from '../styles/Nav.module.css'

export default function Nav () {
  const router = useRouter()
  const itemalign = { display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }
  return (
    <nav className={style.header}>
        <div >
        <h3>Wallet.</h3>
          <div className={style.itemsNav}>
            <div style={itemalign} onClick={() => router.push('/Dashboard')}><span><img src="https://res.cloudinary.com/salta/image/upload/v1658256761/Dashboard_ckbahv.svg"/></span> Dashboard</div>
            <div style={itemalign}onClick={() => router.push('/Wallet')}><span><img src='https://res.cloudinary.com/salta/image/upload/v1658256798/Wallet_vfda4a.svg'/></span> Wallet</div>
            <div style={itemalign} onClick={() => router.push('/News')}><span><img src='https://res.cloudinary.com/salta/image/upload/v1658256871/News_gvb1i2.svg'/></span> News</div>
            <div style={itemalign} onClick={() => router.push('/Settings')}><span><img src='https://res.cloudinary.com/salta/image/upload/v1658256900/Settings_julchm.svg'/></span> Settings</div>
            <div style={itemalign} onClick={() => router.push('/FAQ')}><span><img src='https://res.cloudinary.com/salta/image/upload/v1658256946/FAQ_vjzmyl.svg'/></span> F.A.Q</div>
          </div>
        </div>
           <div style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: '14% auto', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}><span style={{ marginTop: '10px' }}><img src='https://res.cloudinary.com/salta/image/upload/v1658257582/logout_olueax.svg'/></span> Log out</div>
    </nav>
  )
}
