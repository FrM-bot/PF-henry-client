import styles from 'styles/Home.module.css'
import Nav from 'components/Nav'
import AccountDetail from 'components/AccountDetail/AccountDetail'

export default function Home () {
  return (
    <div className={styles.container}>
      <Nav/>
      <AccountDetail/>
    </div>

