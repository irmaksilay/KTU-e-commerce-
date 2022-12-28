import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

const data = [
    {
        id:1,
        img:"https://burst.shopifycdn.com/photos/man-in-white-and-light-tan-outfit.jpg?width=1200&format=pjpg&exif=1&iptc=1",
        img2:"https://burst.shopifycdn.com/photos/man-on-stool-in-hoodie-and-sweatpants.jpg?width=1200&format=pjpg&exif=1&iptc=1",
        title:"Long Sleeve Graphic T-shirt", 
        desc:"Long Sleeve Graphic T-shirt", 
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
        id:2,
        img:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F58%2F27%2F582755f2f710cd3f5ac4765ad7b4d6428d5c9a27.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        title:"Coat",
        desc:"Coat",
        isNew:true,
        oldPrice:19,
        price:12,
    },
];
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
