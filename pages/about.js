import Head from "next/head"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const about = () => {
  return (
    <>
      <Head>
        <title>NinjaList - home</title>
        <meta name="keywords" content="NextJS" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          consequatur quos aut perferendis quod libero obcaecati expedita.
          Libero blanditiis repudiandae harum velit perferendis accusantium
          dolor sint delectus sed, aliquam eaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          incidunt magni reiciendis non perspiciatis dolorem odit aut maxime
          aliquid, ratione dolore dignissimos architecto, vero tempore facere,
          nostrum nisi deleniti excepturi!
        </p>
      </div>
    </>
  )
}
export default about
