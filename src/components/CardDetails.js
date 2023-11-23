import React, { useEffect, useState } from 'react'
import "./cartStyle.css";
import HeaderDetails from './HeaderDetails';
import {useDispatch, useSelector} from'react-redux'
import Cardsdata from './CardData';
import { addToCart,removeFromCart,removeSingle,emptyCart} from '../redux/features/cartSlice';

// add
const CardDetails = () => {
    const {carts}=useSelector((state)=>state.allCart);
    const [totalPrice,setPrice]=useState(0);
    const [totalQnty,setTotalQnty]=useState(0);
   
    const array=useSelector((state)=>state.user);
console.log("my array ",array)

    const dispatch=useDispatch();
    const handleIncr=(e)=>{
        dispatch(addToCart(e))
    }
    //remove
    const handleDec=(e)=>{
        dispatch(removeFromCart(e))
    }
    const handleSingle=(e)=>{
        dispatch(removeSingle(e))
    }
    //emptyCart
    const emptyCartB=()=>{
        dispatch(emptyCart())
    }

    //count total price
    const total=()=>{
        let totalPrice=0
        carts.map((ele,ind)=>{
            totalPrice=ele.price*ele.qnty +totalPrice
        });
        setPrice(totalPrice);
    }
    useEffect(()=>{
        total()
    },[total])

    const countQntty=()=>{
        let totalQnty=0
        carts.map((ele,ind)=>{
            totalQnty=ele.qnty +totalQnty
        });
        setTotalQnty(totalQnty);
    }
    useEffect(()=>{
        countQntty()
    },[countQntty])


  return (
   <>
   <HeaderDetails/>
   <div className='row justify-content-center m-0'>
        <div className='col-md-8 mt-5 mb-5 cardsdetails'>
            <div className='card'>
                <div className='card-header bg-dark p-3'>
                    <div className='card-header-flex'>
                    <h5 className='text-white m-0' style={{color:"white"}}>Cart Calculation {carts.length>0 ? `(${carts.length})`:null}</h5>
                    {
                        carts.length>0? <button className='btn btn-danger mt-0 btn-sm' onClick={emptyCartB}>  <i className='fa fa-trash-alt mr-2'></i> Empty Cart </button>:""
                    }
                    </div> 
                </div>
                    <div className='card-body p-0'>
                        {
                            carts.length===0 ?<table className='table cart-table mb-0'>
                                <tbody>
                                    <tr>
                                        <td colSpan={6}>
                                            <div className='cart-empty'>
                                                <i className='fa fa-shopping-cart'></i>
                                                <p>Your Cart is empty</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>:
                            <table className='table cart-table mb-0 table-responsive-sm'>
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qnty</th>
                                        <th className='text-right'> <span id='amount' className='amount'> Total Amount</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carts.map((data,index)=>{
                                            return(
                                                <>
                                                <tr>
                                                    <td>
                                                        <button className='prdct-delete' onClick={()=>handleDec(data.id)}><i className='fa fa-trash-alt mr-2'></i></button>
                                                    </td>
                                                    <td>
                                                        <div className='product-img'><img src={data.imgdata}/></div>
                                                    </td>
                                                    <td><div className='product-name'><p>{data.dish}</p></div></td>
                                                    <td>{data.price}</td>
                                                    <td>
                                                            <div className='prdct-qty-container'>
                                                            <button className='' type='button' onClick={data.qnty<1 ? (handleDec(data.id)) :()=>handleSingle(data)}>
                                                                <i className='fa fa-minus'></i>
                                                            </button>
                                                            <input type="text" value={data.qnty} disabled className='qty-input-box' name="" id="" />
                                                            <button type='button' onClick={()=>handleIncr(data)}>
                                                                <i className='fa fa-plus'></i>
                                                            </button>
                                                             </div> 
                                                    </td>
                                                    <td className='text-right'>
                                                        {data.qnty * data.price}
                                                    </td>
                                                    
                                                </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Items in Cart <span>:</span><span className='text-danger'> {totalQnty} </span> </th>
                                        <th className='text-right'>Total Price <span>:</span><span className='text-danger'> {totalPrice}</span> </th>
                                    </tr>
                                </tfoot>
                            </table>
                        }
                    </div>
            </div>
        </div>
   </div>
   </>
  )
}

export default CardDetails;