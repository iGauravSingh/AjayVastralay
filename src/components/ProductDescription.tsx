import React, { useContext, useState } from 'react';
import StarGiver from './StarGiver';
import { ShopContext } from './contexts/ShopContexts';

interface Product {
  id: number;
  productName: string;
  productImage: string;
  price: number;
  discount: number;
  stars: number;
  productDescription: string;
}

const ProductDescription: React.FC<Product> = ({
  id,
  productName,
  productImage,
  price,
  discount,
  stars,
  productDescription,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { shop, setShop } = useContext(ShopContext)

  const handleQuantityChange = (value: number) => {
    setQuantity(prevQuantity => prevQuantity + value);
  };


  // id: number;
  // productName: string;
  // productCategory: string;
  // quantity: number;
  // price: number;

  const handleAddToCart = () => {
    const productInCart = shop.find(product => product.id === id);

    if (productInCart) {
        // Update quantity if item already in cart
        const updatedShop = shop.map(product =>
            product.id === id ? { ...product, quantity: product.quantity + quantity } : product
        );
        setShop(updatedShop);
        console.log(`Increased ${productName} quantity to ${productInCart.quantity + quantity} in cart!`);
    } else {
        console.log(`Added ${quantity} ${productName}(s) to cart!`);
        const newProduct = {
            id,
            productName,
            quantity,
            price: Math.round(price * (1 - discount / 100) * 100) / 100
        };
        setShop(prev => [...prev, newProduct]);
    }
};

  return (
    <div className="flex p-4">
      <img src={productImage} alt={productName} className="w-1/2 rounded-lg mr-4" />
      <div className="flex flex-col w-1/2">
        <div>
          <h2 className="text-xl font-semibold">{productName}</h2>
          <p className="text-gray-600">{productDescription}</p>
          <div className="flex items-center mt-2">
          <p className=" text-cyan-500">{!discount ? (<p>${price}</p>) : (<p>
          ${Math.round(price * (1 - discount / 100) * 100) / 100} <span className=" line-through text-red-400">${price}</span> 
        </p>)}</p>
          </div>
          <div className="flex items-center mt-2">
            {/* Render stars here */}
            <StarGiver rating={stars} />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full ml-2"
          >
            +
          </button>
          <button
            onClick={handleAddToCart}
            className=" ml-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;