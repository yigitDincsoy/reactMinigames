import styled from "styled-components";
import React, { useState } from 'react';

function Minigame()
{
    
    const MinigameOuter = styled.div`
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1017%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(35%2c 130%2c 21%2c 1)'%3e%3c/rect%3e%3cpath d='M696.4927319634672 167.83827089428848L662.0637847396233 118.66863854232632 605.523809823602 194.89687555407335z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1091.7298838085967 489.92032722015176L1031.5103612460782 340.8717786066561 942.681335195101 550.1398497826704z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M532.6789738955007 348.15302764441867L485.56958357804615 259.55315050805183 376.22446303222307 374.51717455241703z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M48.343386794248126 300.7080065204202L130.0517657928125 247.64596477089253 9.60451366923877 151.61441714780983z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M116.85187456890927 55.612278384066784L85.17196993862323-55.267387821934314 13.892184520479674 16.012397596209247z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M124.89518869973834 146.580938741845L103.22499580781067 233.49533521883245 244.4316869692557 222.54342631823022z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M787.5457196570584 276.3087810339226L705.074032029679 437.7879519883491 863.4800583555339 432.2562916569202z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-52.060755841298715 519.0615121641666L49.434560855887725 584.9733415013055 13.851073495840168 417.56619546698016z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M396.5917585312367 129.25269676106166L387.8773993297375 58.2799365262443 285.77543857826106 106.83785544590175z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M837.0834953598674 452.3777325242722L770.4422481710283 519.0189797131113 903.7247425487064 519.0189797131113z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1404.0353515712584 43.526023319767525L1300.1309438403746 47.1544451913143 1357.5257805131369 201.19684585186667z' fill='rgba(111%2c 190%2c 37%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1017'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    `;

    const MinigameContent = styled.div`
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    width: 70%;
    height: 100vh;
    margin: auto;
    display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

    >p{
           background: red;
           padding: 10px;
           };
    `;

    const [mgAge, set_mgAge] = useState(0);
    const [mgHealth, set_mgHealth] = useState(0);
    const [mgMoney, set_mgMoney] = useState(0);
    const [mgHappiness, set_mgHapiness] = useState(0);

    return(
        <MinigameOuter>
        <MinigameContent>
            <h5>Play our game to have a chance to win 1 year of premium membership! </h5>
            <h5>💸 Never ending grind 💸</h5>
            <button>Test</button>
            <h5>Your Money: {mgMoney}</h5>
            <p>Your Age: {mgHappiness}</p>
            <p>Your Health: {mgHealth}</p>
            <p>Your Age: {mgHealth}</p>
        </MinigameContent>
        </MinigameOuter>
    )
}


export default Minigame;