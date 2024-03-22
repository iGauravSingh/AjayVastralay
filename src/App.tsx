
import './App.css'
import Banner from './components/Banner'
import BottomBanner from './components/BottomBanner'
import Category from './components/Category'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Offer from './components/offer/Offer'
import Onsale from './components/onsale/Onsale'

function App() {


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

export default App
