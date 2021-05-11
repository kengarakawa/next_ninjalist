import Head from "next/head"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>NinjaList - home</title>
        <meta name="keywords" content="NextJS" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello, mom</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          officiis, laboriosam pariatur nostrum id quia cupiditate incidunt
          corporis dolorum iste earum inventore repellendus, itaque tempora
          consequatur ab suscipit, architecto molestiae.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
          magnam? Alias unde reprehenderit repellat eligendi hic ducimus dolore
          vel, harum aliquam et repellendus quod recusandae illum necessitatibus
          exercitationem adipisci temporibus!
        </p>

        <Link href="/ninjas/">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
