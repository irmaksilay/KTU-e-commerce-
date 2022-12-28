import React from 'react'
import "./List.scss"
import Card from "../Card/Card";
// bu list ile datamızı fetchleyebiliriz
const List = () => {

const data = [
    {
        id:1,
        img:"https://burst.shopifycdn.com/photos/man-in-white-and-light-tan-outfit.jpg?width=1200&format=pjpg&exif=1&iptc=1",
        img2:"https://burst.shopifycdn.com/photos/man-on-stool-in-hoodie-and-sweatpants.jpg?width=1200&format=pjpg&exif=1&iptc=1",
        title:"Long Sleeve Graphic T-shirt", 
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
        id:2,
        img:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F58%2F27%2F582755f2f710cd3f5ac4765ad7b4d6428d5c9a27.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        title:"Coat",
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
        id:3,
        img:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdd%2F2f%2Fdd2fdeaf6adde7f209ad72864b56ae7782a71c83.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        img2:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faa%2F0d%2Faa0d832dd0a79ffc298bca8c82d04ac1eb8939c3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        title:"Skirt",
        isNew: true,
        oldPrice:19,
        price:12,
    },
    {
        id:4,
        img:"https://lp2.hm.com/hmgoepprod?set=source[/ba/09/ba094571baaffd369265ff72cc90f955dc490732.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]",
        img2:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F65%2Fa7%2F65a7112f250071879036906388b9ef97ec9a8849.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
        title:"Hat",
        isNew:true,
        oldPrice:19,
        price:12,
    },
    
]
  return (
    <div className='List'>
      {data?.map(item=>(
      <Card item= {item} key={item.id} />
      ))}
    </div>
  )
}

export default List
