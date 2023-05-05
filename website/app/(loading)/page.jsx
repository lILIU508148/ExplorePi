
import { Inter } from '@next/font/google'
import Piapp from './piapp'
import styles from './Loading.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
    <Piapp/>
    <div className={styles.container}>
    <div className='block text-center'>
        <div className={styles.logo}>
          <h1 className={styles.h1}>
            <span>E</span>
            <span>X</span>
            <span>P</span>
            <span>L</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
            <br/>
            <span>P</span>
            <span>I</span>
            
          </h1>
        </div>
        <div className={styles.loading}>
          <span className={styles.text}>Loading....</span>
          <div className={styles.bar}>
            <div className={styles.progress}></div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
