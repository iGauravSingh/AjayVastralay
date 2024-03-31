import React, { useState } from 'react'
import useProduct from '../../hooks/useProduct';
import useCategoryList from '../../hooks/useCategory';


// export const categoryData = [
//     {id: 1, categoryName: 'For Baby', categoryIdentity: 'baby' ,categoryImage: cat1},
//     {id: 2, categoryName: 'Age: 1-2', categoryIdentity: '1to2' , categoryImage: cat2},
//     {id: 3, categoryName: 'Age: 2-4', categoryIdentity: '2to4' , categoryImage: cat3},
//     {id: 4, categoryName: 'Age: 4-6', categoryIdentity: '4to6' , categoryImage: cat4},
//     {id: 5, categoryName: 'Age: 6-8', categoryIdentity: '6to8' , categoryImage: cat5},
// ]


const CategoryAdmin = () => {

  const { data, loading, error, addCategory, deleteCategory } = useCategoryList()

  const [categoryName,setcategoryName] = useState('')
  const [categoryImage,setcategoryImage] = useState('')
  const [categoryIdentity,setcategoryIdentity] = useState('')
  
  if(loading){
    return (<p>Loading...</p>)
  }

  const handleNameChange =(e:any) => {
    setcategoryName(e.target.value)
  }
  const handleImageChange =(e:any) => {
    setcategoryImage(e.target.value)
  }
  const handleIdentityChange =(e:any) => {
    setcategoryIdentity(e.target.value)
  }
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log({categoryName, categoryImage, categoryIdentity})
    addCategory({categoryName, categoryImage, categoryIdentity})
  }

  const handleDelate =(id: any) => {
    console.log('deleting category with id ', id)
    deleteCategory(id)
  }

  return (
    <>
    {/* add product  */}
    <div>
      <h3 className=' text-center'>Add New Product</h3>
    <form onSubmit={handleSubmit} className=' flex gap-5 mb-4 justify-center' action="">
            <input onChange={handleNameChange} value={categoryName} type="text" placeholder='name of category..' />
            <input onChange={handleImageChange} value={categoryImage} type="text" placeholder='Image link..' />
            <input onChange={handleIdentityChange} value={categoryIdentity} type="text" placeholder='category key..' />
            <input className=' bg-black text-white px-2 py-2 cursor-pointer' type="submit" placeholder='' />
            
        </form>
    </div>
    {/* product list  */}
    <h3 className=' text-center'>Product List</h3>
    <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">Category ID</th>
            <th scope="col" className="py-3 px-6">Category Name</th>
            <th scope="col" className="py-3 px-6">Category Identity</th>
            <th scope="col" className="py-3 px-6">Product Image</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, index) => (
            
            <tr key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}`}>
              
              <td className="py-4 px-6"><span className=' flex gap-2 items-center'><p onClick={()=>handleDelate(order.id)} className=' text-red-500 text-xl cursor-pointer'>X</p>{order.id}</span></td>
              <td className="py-4 px-6">{order.categoryName}</td>
              <td className="py-4 px-6">{order.categoryIdentity}</td>
              <td className="py-4 px-6">{order.categoryImage}</td>
            </tr>
            
            
            
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default CategoryAdmin