import Head from 'next/head'
import Image from 'next/image'
import Navbar2 from '../components/Navbar2'
import ProductHero from '../views/producthero';
// import ProductValues from '../views/productvalues';
import ProductCategories from '../views/productcategories';
import ProductHowItWorks from '../views/producthowitworks';
import Pricing from '../views/pricing';
// import ProductCTA from '../views/productcta';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Resume Editor Service</title>
      </Head>
      <Navbar2 />
      <ProductHero />
      {/* <ProductValues /> */}
      <ProductCategories />
      <ProductHowItWorks />
      <Pricing/>
    </div>
  )
}
