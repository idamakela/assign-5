import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css' //om module används måste man skriva klassnamn som nedan (ex: styles.main, aka nameToFile.cssClassNameStyle)

const inter = Inter({ subsets: ['latin'] }) //to make certain elements have a certain font

export default function Home() {
  return (
    <main>
        <h1>hi</h1>
    </main>
  )
}
