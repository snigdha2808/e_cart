import React from 'react'
import HeaderDetails from './HeaderDetails';
import HomeDetails from './HomeDetails';
import {Route,Routes} from "react-router-dom";
import CardDetails from './CardDetails';
const Details = () => {
  return (
    <>
    <HeaderDetails/>
    
    <HomeDetails/>
    
    </>
  );
}

export default Details;