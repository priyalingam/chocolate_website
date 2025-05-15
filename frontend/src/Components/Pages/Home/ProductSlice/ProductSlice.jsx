import React from "react";
import img1 from '../../../../assets/Product image/img11.png'
import img2 from '../../../../assets/Product image/img9.png'
import img3 from '../../../../assets/Product image/img3.png'
import './ProductSlice.css'
import { useNavigate } from "react-router-dom";

const ProductSlice = () => {
   const navigate=useNavigate();
  const product=[{
    id:1,
    name:"Chocolate Covered Roast",
    img:img1,
    price:17.99,
   categories:"Chocolate,Delicious,sweet",
    tags:"Chocolate,Deserts",
    description:"A bold fusion of savory and sweet, this unique dish features a tender, slow-roasted cut of meat—seasoned with aromatic herbs and spices—encased in a rich, velvety dark chocolate glaze. The deep umami of the roast is elevated by the subtle bitterness and complexity of premium chocolate, creating a luxurious harmony of flavors. Perfect for adventurous palates, this decadent entrée balances warmth, richness, and just a touch of indulgence."

  },
{
    id:2,
    name:"Honey Roasted Nuts",
    img:img2,
    price:19.99,
   categories:"Chocolate,Delicious,sweet",
    tags:"Chocolate,Deserts",
    description:"A perfectly sweet and crunchy snack, our honey roasted nuts are oven-roasted to golden perfection and lightly coated in a blend of pure honey and a hint of sea salt. Each bite delivers a satisfying crunch with a balanced flavor that’s both indulgent and wholesome. Great for snacking, gifting, or adding a sweet-savory touch to your favorite dishes."

  },
{
    id:3,
    name:"Almond Dark Chocolate",
    img:img3,
    price:11.49,
    categories:"Chocolate,Delicious,sweet",
    tags:"Chocolate,Deserts",
    description:"A timeless blend of bold and nutty, our Almond Dark Chocolate combines roasted whole almonds with smooth, rich dark chocolate for a perfectly balanced bite. The deep, slightly bitter notes of premium dark chocolate complement the natural crunch and subtle sweetness of the almonds, creating a satisfying treat that’s both indulgent and energizing."

  },

]

const handleproduct=()=>{
  navigate('/product')
}

const handleNavigate=(product)=>{
  navigate('/productdetail',{state:product})
}
  return (
    <div className="home-product-container">
      <div className="home-product-heading">
        <p className="product-price">Online store</p>
        <h3>Discover sweets Delicious</h3>
            
          </div>
     <div className="home-product-card-container" >
      {product &&
         <div className="product-container">
        {product.slice(0,4).map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img src={product.img} alt={product.name} className="product-img" />
              <button className="product-button" onClick={() => handleNavigate(product)}>Read More</button>
            </div>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>}


     </div>
     <button className="chef-button" style={{marginTop:"10px"}} onClick={handleproduct}>Read More</button>

      
    </div>
  )

};

export default ProductSlice;
