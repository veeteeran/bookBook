import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import Welcome from '../src/components/Welcome/Welcome'
import styles from "../styles/Home.module.css"
import Head from "next/head"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>bookBook</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Thasadith:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Welcome to bookBook</h1> */}
        <Welcome />
      </main>
      <Footer />
    </div>
  )
}
