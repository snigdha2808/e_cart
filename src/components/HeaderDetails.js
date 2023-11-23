import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderDetails = () => {
  return (
    <>
    <Navbar style={{height:"60px",background: "black",color:"white"}}>
        <Container>
          <h3 className='text-Light'>Ecommerce</h3>
          <div id='ex4'>
            <span className='p1 fa-stack fa-2x has-badge' data-count={1} >
            <ShoppingCartIcon/>
           </span>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderDetails