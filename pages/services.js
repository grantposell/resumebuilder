import Head from 'next/head'
import Navbar2 from '../components/Navbar2'
import Image from 'next/image'
import mypic from '../pages/images/resumes.png'

export default function Services(props) {

  return (
    <div>
      <Head>
        <title>Resume Editor Service</title>
      </Head>
      <Navbar2 />
      <h1>Services are cool</h1>
      <Image
        src={mypic}
        alt="Picture of the author"
        width="350px"
        height="300px"
      />
    </div>
  )
}
