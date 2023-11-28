import React, { useEffect, useState } from "react";
import "./styleDetails.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData";
//import Cardsdata from './CardData';
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const HomeDetails = () => {
  console.log(Cardsdata);
  const [cartData, setcartData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const {carts}=useSelector((state)=>state.allCart);
  console.log(carts,"cfvgbhnjm");

  //quantity
const [qty,setQty]=useState(1);

  // add to cart:
  const [count, setCount] = useState(0);
  const send = (ele, index) => {
    console.log("first", ele, index);
    setCount(count + 1);
    dispatch(addToCart(ele));
    setcartData((prevProducts) =>
      prevProducts.map((index) =>
        cartData.id === index ? { ...index, count: index + 1 } :index
      )
    );

  };
// console.log("my qty is ....",qty)
  return (
    <>
      <section className="item_section mt-4 container">
        <h3 className="px-4">Cars Available </h3>
        <div className="row mt-2 d-flex justify-around align-items">
          {cartData.map((element, index) => {
            // console.log(cartData,"gbhnjmk")
            return (
              <>
                <Card
                  key={index}
                  
                  style={{ width: "19rem", border: "none" }}
                  className="hove mb-4"
                >
                    

                  <Card.Img variant="top" src={element.imgdata} />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                    </div>
                    <div className="lower_data d-flex justify-content-between">
                      <h5 className="mt-2">{element.address}</h5>
                      <span>{element.price}</span>
                    </div>
                    <div className="last_data d-flex justify-content-between align-items-center">
                    {/* carts.map((data,index)=>{
                      return(
                        <p >{data.qnty} </p>
                        
                        )
          }); */}

          {
            carts.map((arr)=>{

              // console.log("my arraty sis id .....",arr.id)
              if(arr.id===element.id)
              {
                // console.log("my arraty sis id .....",arr.qnty)
                  // return setQty(arr.qnty);
                  return (
                    <>
                    <p>Qnty :{arr.qnty}</p>
                    </>
                  )

              }
              // setQty(arr.qty);
            })
          }
                      {/* <p>Qnty :{count} </p> */}
                      <Button
                        style={{
                          with: "150px",
                          backgroundColor: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(element, index)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomeDetails;
