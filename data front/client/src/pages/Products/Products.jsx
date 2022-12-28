import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
//import List from "../../components/List/List";
//import useFetch from "../../hooks/useFetch";
import "./Products.scss";


const Products = () => {

   const catId = parseInt(useParams().id)
   const [maxPrice,setMaxPrice]= useState(1000)
   const [sort,setSort]= useState(null)


  /*
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
 */

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id = "1" value={1} /> 
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id = "2" value={2} /> 
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id = "3" value={3} /> 
            <label htmlFor="3">Coats</label>
          </div>
          {/* {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))} */}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
          {/* <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div> */}
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("asc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
          {/* <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div> */}
          <div className="inputItem">
            {/* <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label> */}
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://d16bl9hbknyxy0.cloudfront.net/1335cf25-83e2-4da6-908f-68f52cddf9a3/4f7047d8-c761-4a41-a188-9ccb58c7a7be/fa_horizontal_center.png?&Expires=9223372036854775&Signature=PDs2PrWIVhHxmojGWk~pK-yWZtvLU1p7DfJx7iWFgQ0ql1RWUdwPGfUCSVuxj4GV4RjrxtNcBdq2umxVdIkaQMdKsrRZBu3gcEKzVuEyaB2tXs2qMhAkOr6IEAXpUjBZjg4eBEk6mEjybjL5m490D1AEKa7CuDoA2s-AbbzJ8PEvCfogs5LmuGnK1pWQOIEFczpnwyU36bzg9zwlxIf2258ZLIdHor-lqjsy-Q6XwgwscnseS~xZNNU4gvl3RZlXrGGuOs2fOepCsAKO5GEgMc59Ene4qBdqes78js6oJbbh9ktogRRYQCrTLY4MWX6JHHbIr-OJKYIhw5OVMsyJcw__&Key-Pair-Id=K2SKI2Y48Y62V1" alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />

        {/* <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/> */}
      </div>
    </div>
  );
};

export default Products; 