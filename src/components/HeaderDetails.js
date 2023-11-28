import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const HeaderDetails = () => {
  
  const {carts}=useSelector((state)=>state.allCart);
  console.log(carts);
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
    //<NavLink to='/login'></NavLink>

  }
  return (
    <>
    <Navbar style={{height:"60px",background: "black",color:"white"}}>
        <Container>
          
          <NavLink to='/details' className='text-decoration-none mx-2 text-light'>
          <h3 className='text-light ' style={{color:"white"}}>Ecommerce</h3>
          </NavLink>
          
          <NavLink to='/cardDetails' className='text-decoration-none mx-2 text-light'>
          <div id='ex4' >
            <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length} >
            <ShoppingCartIcon style={{height:"50px" ,width:"50px"}}/>
           </span>
          </div>
          </NavLink>
          <NavLink to='/login' className='text-decoration-none mx-2 '>
         
            <button style={{background: "none",color: "inherit",border: "none",padding: "0",font: "inherit" , color:"white"}} onClick={handleClick}>LogOut</button>
          
          </NavLink>
          <NavLink to='/profile' className='text-decoration-none mx-2 '>
         
            <button style={{background: "none",color: "inherit",border: "none",padding: "0",font: "inherit" , color:"white"}} >My Profile</button>
          
          </NavLink>
          
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderDetails