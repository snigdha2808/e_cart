import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink , useNavigate } from 'react-router-dom';


function Home() {
    const [inpval,setInpval]=useState({
        name:"",email:"",date:"",password:""
    });
    const [data,setData]=useState([])
    console.log(inpval)
    const getData=(e)=>{
        //console.log(e.target.value);
        const {value,name}=e.target;
        //console.log(value,name)
        setInpval(()=>{
            return{
                ...inpval,[name]:value
            }
        })
    }
    const navigate=useNavigate();
    const addData=(e)=>{
        e.preventDefault();
        //console.log(inpval);
        const {name,email,date,password}=inpval;
        if(name===""){
            alert("name field is required")
        }
        else if(email===""){
            alert("email field is required")
        }
        else if(!email.includes("@")){
            alert("email field is incorrect")
        }
        else if(date===""){
            alert("date field is required")
        }
        else if(password===""){
            alert("password field is required")
        }
        else if(password.length<5){
            alert("password length must be greater than 5")
        }
        else{
            localStorage.setItem("userData",JSON.stringify([...data,inpval]));
           navigate('/details')
        }
    }
  return (
    <>
    <div className='container mt-3 ' >
        <section>
            <div className='left_data text-center'>
                <h3>Sign Up</h3>
                <Form >
                    <Form.Group className="mb-3 col-lg-6" controlId="formGroupEmail">
                        
                        <Form.Control type="text" name='name' onChange={getData} placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formGroupEmail">
                        
                        <Form.Control type="email" name='email' onChange={getData} placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formGroupEmail">
                        
                        <Form.Control onChange={getData} name='date' type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formGroupPassword">
                        
                        <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={addData} type='submit'>
                        Submit
                    </Button>
                </Form>
                <p>Already Have An Account <span> <NavLink to="/login"> Sign In</NavLink></span> </p>
            </div>

        </section>
    </div>
        
    </>
  )
}

export default Home;