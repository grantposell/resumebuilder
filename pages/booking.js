import Head from 'next/head'
import Navbar2 from '../components/Navbar2'
import { InlineWidget } from "react-calendly";

export default function Booking() {

  return (
    <div style={{backgroundColor: "#A2AAAD", height:'100vh'}}>
      <Head>
        <title>Resume Editor Service</title>
      </Head>
      <Navbar2 />
      <InlineWidget url="https://calendly.com/grantposell"/>
      </div>
  )
}