
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Offer from '../components/offer/Offer'
import Banner from '../components/Banner'
import Onsale from '../components/onsale/Onsale'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <Hero />
    <Category />
    <Offer />
    <Banner />
    <Onsale />
    <BottomBanner />
    <Footer />
    </>
  )
}

export default Homepage