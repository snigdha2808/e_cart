import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate, Navigate, NavLink} from 'react-router-dom';
function Login() {
    const detailsN=useNavigate();
    const [inpval,setInpval]=useState({
        email:"",password:""
    });
    const [data,setData]=useState([])
    //console.log(inpval)
    const getData=(e)=>{
        //console.log(e.target.value);
        const {value,name}=e.target;
        console.log(value,name)
        setInpval(()=>{
            return{
                ...inpval,[name]:value
            }
        })
    }


//   function Match(){
     
//   }

    const addData=(e)=>{
        e.preventDefault();
        // console.log(inpval);
        const getuserArr=localStorage.getItem("userData");
         console.log("................",getuserArr);

        const {email,password}=inpval;
        
        if(email===""){
            alert("email field is required")
        }
        else if(!email.includes("@")){
            alert("email field is incorrect")
        }
        else if(password===""){
            alert("password field is required")
        }
        else if(password.length<5){
            alert("password length must be greater than 5")
        }
        else{
           // console.log("array",getuserArr)
            // console.log(getuserArr.length)
            // if(Matched())
            if(getuserArr && getuserArr.length)
            {
                console.log("userLogin");
                const userData=JSON.parse(getuserArr);
                console.log("userData",userData);
                let userLogin=false;
                if(userData.email===email && userData.password===password)
                    {
                        userLogin= true;
                    }

                    // console.log("userData",userLogin);
                // const userLogin=true;
                // const userLogin=userData.filter((el,ind)=>{
                //      if(el.email===email && el.password===password)
                //     {
                //         return true;
                //     }
                // }); 
                //console.log(userLogin);
                if(!userLogin){
                    alert("invalid details");
                }
                else{
                    console.log("user login successfully")
                    localStorage.setItem("user_login",JSON.stringify(getuserArr))
                    detailsN('/details')
                    
                }
            }
        }
        //detailsN('/details')
    }
  return (
    <>
    <div className='container mt-3 ' >
        <section>
            <div className='left_data text-center'>
                <h3>Sign In</h3>
                <Form >
                    
                    <Form.Group className="mb-3 col-lg-6" controlId="formGroupEmail">
                        
                        <Form.Control type="email" name='email' onChange={getData} placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6" controlId="formGroupEmail">
                      
                        <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={addData} type='submit'>
                        Submit
                    </Button>
                </Form>
                <p>Don't have an account <span> <NavLink to="/"> Sign Up</NavLink></span>   </p>
            </div>

        </section>
    </div>
        
    </>
  )
}

export default Login