
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Offer from '../components/offer/Offer'
import Banner from '../components/Banner'
import Onsale from '../components/onsale/Onsale'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'
import useCategoryList from '../hooks/useCategory'

const Homepage = () => {

  const { data, loading, error } = useCategoryList()

  return (
    <>
    <Topbar />
    <Navbar catData={data} />
    <Hero />
    <Category catData={data} />
    <Offer />
    <Banner />
    <Onsale />
    <BottomBanner />
    <Footer />
    </>
  )
}

export default Homepage