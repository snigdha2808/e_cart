import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from "react-router-dom";
export default function ProtectedRoute({Component}) {
    // const {Component}=props
    const navigate=useNavigate();

    const [isLogin, setIslogin] = useState(false);
    
    useEffect(() => {
      const token = localStorage.getItem('userData');

      console.log(token)
      if(token){

      setIslogin(true);
    }else{
      navigate('/')
    }
  }, []);

  console.log('isLogin=', isLogin)

    
    return (

        isLogin && Component
    )
}
