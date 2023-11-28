import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
function Profile() {

    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userDOB, setUserDOB] = useState(null);
    console.log(localStorage.getItem("userData"),"asdfgsxcdvfgb")

    const input=useRef(null);
    const [image,setImage]=useState("");

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const { name } = parsedData;
          const {email}=parsedData;
          const {date}=parsedData;
          setUserName(name);
          setUserEmail(email);
          setUserDOB(date);
        }
    }, []);

    // const handleImgClick=()=>{
    //     input.current.click();
    // }
    const handleImageChange=(event)=>{
        const file=event.target.files[0];
        setImage(event.target.files[0]);
    }


  return (
    <>
    <h1>My Profile</h1>
    <div >
        {
            image?<img src={URL.createObjectURL(image)} alt="" style={{height:"300px", width:"300px"}}/>:(<img src="profile_pic.jpg" alt="" style={{height:"300px", width:"300px"}}/>)
        }
         <br/>
        <input type="file" ref={input} onChange={handleImageChange} />
    </div>
   
    
    <h5>Name - {userName}</h5>
    <h5>Email Id - {userEmail}</h5>
    <h5>Date-of-birth - {userDOB}</h5>
    <br/>
    <p>Back to Home Page <span> <NavLink to="/details"> Home Page </NavLink></span> </p>
            
    </>
  )
}

export default Profile