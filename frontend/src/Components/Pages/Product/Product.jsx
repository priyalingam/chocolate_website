import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Common/Layout/Header/Header';
import Footer from '../../Common/Layout/Footer/Footer';
import Headerbg from '../../Common/Layout/Headerbg/Headerbg';

import img1 from '../../../assets/Product image/img11.png';
import img2 from '../../../assets/Product image/img9.png';
import img3 from '../../../assets/Product image/img3.png';
import img4 from '../../../assets/Product image/img4.png';
import img5 from '../../../assets/Product image/img10.png';
import img6 from '../../../assets/Product image/img6.png';
import img7 from '../../../assets/Product image/img12.png';
import img8 from '../../../assets/Product image/img13.png';
// import img8 from '../../../assets/Product image/img1.png';


import './Product.css';

function Product() {
  const navigate = useNavigate();

 const productDetails=[{
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
{
    id:4,
    name:"Truffle with vanilla",
    img:img4,
    price:25.00,
      categories:"Chocolate,Delicious,sweet",
    tags:"Chocolate,Deserts",
    description:"Delicately smooth and irresistibly creamy, our Vanilla Truffle features a luscious center infused with pure vanilla bean, enrobed in a rich chocolate shell. Each bite offers a melt-in-your-mouth experience, balancing the warmth of real vanilla with the indulgence of handcrafted chocolate. A classic treat with a touch of elegance."

  },
  {
    id:5,
    name:"Pastry chef fantsy",
    img:img5,
    price:13.25,
      categories:"Chocolate,Delicious,sweet",
    tags:"Chocolate,Deserts",
    description:"Imagine stepping into a world where the air is thick with the scent of freshly baked pastries, where velvety creams and delicate confections twirl into existence with the touch of a pastry chef's hand. Cream Delicious Sweets are a dream brought to life in the kitchen — a perfect fusion of rich, creamy textures and heavenly flavors, crafted for the true connoisseur of indulgence."

  },
  {
    id:6,
    name:"Peppered Dark chocolate",
    img:img6,
    price:29.50,
      categories:"Chocolate,Delicious,sweet",
    tags:"Chocolate,Deserts",
    description:"Dive into the world of sophisticated indulgence with our Peppered Dark Chocolate, where rich, intense cocoa meets a surprising kick of heat. This luxurious dark chocolate is expertly crafted from the finest cocoa beans, delivering a smooth, velvety texture that melts effortlessly on your tongue. But what makes it truly unique is the delicate infusion of finely ground pepper — just enough to awaken your senses and create a perfect balance of heat and sweetness."
  },
  {
    id:7,
    name:"Fruit Praline",
    img:img7,
      price:29.50,
    categories:"Chocolate,Delicious,sweet",
    tags:"Chocolate,Deserts",
    description:"A delightful twist on the classic praline — our fruit praline combines rich, crunchy caramelized nuts with bursts of real dried fruits like strawberries, cranberries, and apricots. Each bite offers a perfect balance of nutty sweetness and natural fruity tang, wrapped in silky smooth chocolate for an indulgent finish."

  },
  {
    id:8,
    name:"Chocolate with peanuts",
    img:img8,
      price:29.50,
    categories:"Chocolate,Delicious,sweet",
    tags:"Chocolate,Deserts",
    description:"A delightful twist on the classic praline — our fruit praline combines rich, crunchy caramelized nuts with bursts of real dried fruits like strawberries, cranberries, and apricots. Each bite offers a perfect balance of nutty sweetness and natural fruity tang, wrapped in silky smooth chocolate for an indulgent finish."

  }
]



  const handleNavigate = (product) => {
    navigate('/productdetail', { state: product });
   
   
  
  };

  return (
    <>
      <Header />
      <Headerbg title="Product" />
      <div className='product-heading'>
          <div className="home-product-heading">
        <p>Online store</p>
        <h3>Discover sweets Delicious</h3>
            
          </div>
      </div>
 
      <div className="product-container">
      
        { productDetails && 
        (productDetails.map((product,index) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper"> 
              <img src={product.img} alt={product.name} className="product-img" />
              <button className="product-button" onClick={() => handleNavigate(product)}>Read More</button>
</div>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        )
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Product;
