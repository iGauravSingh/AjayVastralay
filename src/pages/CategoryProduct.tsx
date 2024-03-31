
import { useEffect, useState } from 'react'
import { productData } from '../utils/data/data'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/offer/Card'
import useProduct from '../hooks/useProduct'


const CategoryProduct = () => {

  const { categoryIdentity } = useParams(); // Getting category ID from URL
  //console.log('useparams value',categoryIdentity)
  const { categoryProduct } = useProduct(); // Using your custom hook
  const id = categoryIdentity
  const [catPro, setCatPro] = useState([]); // State to store the category products

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      // Ensure we have a valid category ID before fetching
      //console.log('in use effect')
      const categoryId = parseInt(id, 10);
      //console.log('in use effect categoryId',categoryId)
      if (!isNaN(categoryId)) {
        //console.log('in use effect if')
        const categoryProducts = await categoryProduct(categoryId);
        //console.log('in use effect if categoryProducts',categoryProducts)
        setCatPro(categoryProducts);
      }
    };

    fetchCategoryProducts();
  }, [id, categoryProduct]); // Dependency array ensures this runs when `id` or `categoryProduct` changes

  
// productName, productImage, price, discountt
  return (
    <>
    <Navbar />
    <h3 className=' text-center font-poppins text-4xl mt-5'></h3>
    <div className=' flex justify-center items-center gap-7 mt-8'>
    <div className=' grid grid-cols-2 gap-10'>
    {catPro.map((cat) => (
            <Card 
              key={cat.id} // Always use keys when mapping over arrays to render components
              id={cat.id} 
              productName={cat.productName} 
              productImage={cat.productImage} 
              price={cat.price} 
              discount={cat.discount} 
            />
          ))}
    </div>
    </div>
    <Footer />
    </>
  )
}

export default CategoryProduct