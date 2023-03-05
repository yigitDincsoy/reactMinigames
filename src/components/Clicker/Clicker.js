import './Clicker.css';
import styled from "styled-components";
import React, { useState, useEffect } from 'react';


function Clicker() //REQ: Functional Component 2/3
{
  //LOGIC
  //Dynamic Values
  const [unitInfo, set_unitInfo] = useState(null);
  const [food, set_food] = useState(50);

  const [unit_peasant, set_unit_peasant] = useState(0);
  const [unit_windmill, set_unit_windmill] = useState(0);
  const [unit_farm, set_unit_farm] = useState(0);

  const [harvestTimer, set_harvestTimer] = useState(10);

  //Non-Dynamic Values
  const contentLoading = "Loading...";

  //Load unit data from the server
  useEffect(() => {
    fetch("http://localhost:8000/productionUnits")
     .then(res => {return res.json()})
     .then(data => {
      set_unitInfo(data)
    })
     }, [])

  //Starting calls
 

  //Script

  function scr_forage() {
    set_food(food+1);
    set_harvestTimer(harvestTimer-1);

    if (harvestTimer == 1) {
      set_harvestTimer(10);
      let foodPerHarvest =  
          unitInfo["Peasant"]["food_production"]*unit_peasant +
          unitInfo["Potato Farm"]["food_production"]*unit_farm +
          unitInfo["Windmill"]["food_production"]*unit_windmill;
    
    set_food(food + foodPerHarvest);
    }
  }

  function Infobox(props) { //REQ: Functional Component 3/3

    /*Logic*/
    const myData = props["unitInfo"][props.type];

    function scr_purchase(unitType) {
      if (food >= myData.cost) {

        switch(unitType) {
          case "Peasant":
            set_food(food-myData.cost);
            set_unit_peasant(unit_peasant+1);
            break;
          case "Potato Farm":
            set_food(food-myData.cost);
            set_unit_farm(unit_farm+1);
            break;
          case "Windmill":
            set_food(food-myData.cost);
            set_unit_windmill(unit_windmill+1);
            break;
        } 
      }
      
     
    }
        
    /*Styled Components*/
    const InfoboxOuter = styled.div`
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
    background-color: ${props.bgcolor};
    
    >button{
        background-color: white;
        color: black;
        font-family: 'Kanit', sans-serif;
        font-size: larger;
        width: 90%;
        padding: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        };
    
    `;
    
      /*Rendering*/
        return(
        <>
        <InfoboxOuter>
            <p>Unit Name: {props.type}</p>
            <p>Purchase Cost: {myData.cost}</p>
            <p>Food Production: {myData.food_production}</p>
            <button onClick={() => scr_purchase(props.type)}>Purchase</button>
        </InfoboxOuter>
        </>
        )
    }
  


return(
<div class="container">
  <div class="a1_left">
    {unitInfo ?
    <>
      <Infobox type="Peasant" unitInfo = {unitInfo} bgcolor="DarkKhaki"/>
      <Infobox type="Potato Farm" unitInfo = {unitInfo} bgcolor="DarkSalmon"/>
      <Infobox type="Windmill" unitInfo = {unitInfo} bgcolor="Orange"/>
      </>
      :
      contentLoading
    }
  </div>
  <div class="a1_mid">
    <>
      <h3 id="gameTitle">Medieval Farming Simulator </h3>
      <div className="informationArea">
      <h4>🍲 Food: {food} </h4> 
      <h4>👨‍🌾 Peasants: {unit_peasant} </h4>
      <h4>🥔 Potato Farms: {unit_farm} </h4>
      <h4>🛖 Windmills: {unit_windmill} </h4>
      </div>
      <br/>
      
      {unitInfo ?
      <>
      <div className="incomeArea">
      <h4>
        Estate Income: {
      unitInfo["Peasant"]["food_production"]*unit_peasant +
      unitInfo["Potato Farm"]["food_production"]*unit_farm +
      unitInfo["Windmill"]["food_production"]*unit_windmill
     } / Harvest</h4>
      </div>
      <br/>
      
    
        <p>{harvestTimer} days until the next harvest!</p>
 
 
        
        
      </>
      :
      contentLoading
    }



    </>
    </div>
  <div class="a1_right">

    <button id="forageButton" onClick={()=>scr_forage()} > <span id="deerEmoji">🌾</span> <br/>Produce Food! (+1)</button>
    <div class="explain"> 
    <h5>How to play?</h5>
    <ul>
      <li>Click "Produce Food" button to manually get some food.</li>
      <li>Purchase Peasants, Farms and Windmills with your resources.</li>
      <li>With more units you have, more food will you obtain! </li>
    </ul> 
     </div>
    </div>
</div>
    )
}




export default Clicker;