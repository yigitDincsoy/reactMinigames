import styled from "styled-components";
import React, { useState, useEffect } from 'react';

/*Styled Components*/
const ErrorPage = styled.div`
border: 2px solid black;
padding: 10px;
background-color: beige;
display: flex;
align-items: center;
justify-content: center;
height: 85vh;
flex-direction: column;
color: white;
  
& .catPic {
      margin-top: 10%;
      height: 300px;
      }
`

const ErrorPageInfo = styled.div`
padding:20px;
border: 5px solid black;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: red;
font-weight: 600;
font-family: 'Kanit', sans-serif;`

function Nopage() {
    const [catURL, setcatURL] = useState(null);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
         .then(res => {return res.json()})
         .then(data => {
            setcatURL(data["0"]["url"]);
        })}, [])


    return(
        <ErrorPage>
        <ErrorPageInfo>
        <h3>Error 404 - This page does not exist.</h3>
        <p>Here is a cat picture from the interwebs instead.</p>
        <img className="catPic" src={catURL}/>
        </ErrorPageInfo>
        </ErrorPage>
    )
}


export default Nopage;