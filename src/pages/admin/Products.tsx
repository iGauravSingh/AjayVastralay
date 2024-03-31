import React, { useState } from "react";
import useProduct from "../../hooks/useProduct";
import useCategoryList from "../../hooks/useCategory";

const Products = ({categoryData}: any) => {
  const { data, loading, error, addProduct, deleteProduct } = useProduct();

  
  const [categoryDropStatus, setCategoryDropStatus] = useState(false)
  const [productName, setproductName] = useState("");
  const [productImage, setproductImage] = useState("");
  const [category, setcategory] = useState('select');
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [stars, setStars] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [featured, setFeatured] = useState(false);
  const [description, setdescription] = useState("");

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleNameChange = (e: any) => {
    setproductName(e.target.value);
  };
  const handleImageChange = (e: any) => {
    setproductImage(e.target.value);
  };
  const handlecategory = (e: any) => {
    setcategory(e.target.value);
  };
  const handlePriceChange = (e: any) => {
    setPrice(e.target.value);
  };
  const handleStarChange = (e: any) => {
    setStars(e.target.value);
  };
  const handleDiscount = (e: any) => {
    setDiscount(e.target.value);
  };
  const handleQuantity = (e: any) => {
    setQuantity(e.target.value);
  };
  // const handlefeatured =(e: any) => {
  //   setFeatured(e.target.value)
  // }
  const handledescription = (e: any) => {
    setdescription(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log({
      productName,
      productImage,
      category,
      price,
      discount,
      stars,
      quantity,
      featured,
      description,
    });
    addProduct({
      productName,
      productImage,
          category,
      price,
      discount,
      stars,
      quantity,
      featured,
      description,
    });
  };

  const handleDelate = (id:any) => {
    deleteProduct(id)
  }

  return (
    <>
      {/* add product  */}
      <div>
        <h3 className=" text-center font-bold border-b-2 border-cyan-300">
          Add New Product
        </h3>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-wrap gap-5 mb-4 mt-4 justify-center"
          action=""
        >
          <label htmlFor="productName">productName</label>
          <input
            id="productName"
            onChange={handleNameChange}
            value={productName}
            type="text"
            placeholder="name of product.."
          />
          <label htmlFor="productImage">productImage</label>
          <input
            id="productImage"
            onChange={handleImageChange}
            value={productImage}
            type="text"
            placeholder="Image link.."
          />
          <label htmlFor="category">category</label>

          {/* category  */}
          <div className=" w-16 bg-slate-400">
            <div onClick={()=> setCategoryDropStatus(prevState => !prevState)} className=" relative">
              <p >{category}</p>
              <ul  className={`absolute ${categoryDropStatus ? 'block' : 'hidden'} top-6 left-0 bg-slate-200 z-30`} >
                {categoryData?.map((cat: any) => <li key={cat.id} onClick={() => setcategory(cat.id)} className=" cursor-pointer">{cat.categoryIdentity}</li>)}
              </ul>
            </div>
          </div>

          <label htmlFor="price">price</label>
          <input
            id="price"
            onChange={handlePriceChange}
            value={price}
            type="text"
            placeholder="price.."
          />
          <label htmlFor="stars">stars</label>
          <input
            id="stars"
            onChange={handleStarChange}
            value={stars}
            type="text"
            placeholder="Star.."
          />
          <label htmlFor="discount">discount</label>
          <input
            id="discount"
            onChange={handleDiscount}
            value={discount}
            type="text"
            placeholder="Discount percent.."
          />
          <label htmlFor="quantity">quantity in stock</label>
          <input
            id="quantity"
            onChange={handleQuantity}
            value={quantity}
            type="text"
            placeholder="Quantity in STock.."
          />

          {/* <input onChange={handlefeatured} value={featured} type="checkbox" placeholder='price..' /> */}
          <label htmlFor="discription">discription</label>
          <input
            id="discription"
            onChange={handledescription}
            value={description}
            type="text"
            placeholder="Describe product.."
          />

          <input
            className=" bg-black text-white px-2 py-2 cursor-pointer"
            type="submit"
            placeholder=""
          />
        </form>
      </div>
      {/* product list  */}
      <h3 className=" text-center font-bold border-b-2 border-cyan-300 mt-5 mb-4">
        Product List
      </h3>
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product ID
              </th>
              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              {/* <th scope="col" className="py-3 px-6">
                Product Category
              </th> */}
              <th scope="col" className="py-3 px-6">
                Product Image
              </th>
              <th scope="col" className="py-3 px-6">
                Product Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Product Star
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order, index) => (
              <tr
                key={index}
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "bg-white dark:bg-gray-700"
                }`}
              >
                
                <td className="py-4 px-6"><span className=' flex gap-2 items-center'><p onClick={()=>handleDelate(order.id)} className=' text-red-500 text-xl cursor-pointer'>X</p>{order.id}</span></td>
                <td className="py-4 px-6">{order.productName}</td>
                <td className="py-4 px-6">{order.productImage}</td>
                <td className="py-4 px-6">{order.price}</td>
                <td className="py-4 px-6">{order.stars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
