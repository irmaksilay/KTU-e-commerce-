import React from 'react'
import { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";


const Product = () => {

  const[ selectedImg, setSelectedImg] = useState(0)
  const[ quantity, setQuantity] = useState(0)


  const images = [
    "https://burst.shopifycdn.com/photos/man-in-white-and-light-tan-outfit.jpg?width=1200&format=pjpg&exif=1&iptc=1",
    "https://burst.shopifycdn.com/photos/man-on-stool-in-hoodie-and-sweatpants.jpg?width=1200&format=pjpg&exif=1&iptc=1",
  ]


  return (
    <div className='product' >
      <div className="left">
         <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e=> setSelectedImg(1)} />
         </div>
         <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
         </div>
      </div>
      <div className="right">
        <h1>Long Sleeve Graphic T-shirt</h1>
        <span>230$</span>
        <p>
        Long Sleeve Graphic T-shirt
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev => prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev => prev +1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/>ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
         </div>
      </div>
      
    </div>
 )
}

export default Product
