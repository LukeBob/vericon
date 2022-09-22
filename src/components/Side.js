import React, { useState } from 'react'
import styled from 'styled-components'






const Bar = styled.div`
    height: 40px;
    width: 100%;
    color: white;
    position: relative;
    display: flex;
    cursor: pointer;
    align-items:center;
    justify-content: center;
    border-radius: 50px;
    transition-duration: 200ms;

    &:hover {
        background-color: #67679978;
    }

    &:active,
    &:focus {
        background-color: white;
    }
`


const SideBar = styled.div`
height: 100%;
width: 90px;
display: flex;
padding: 1rem 1rem;
flex-direction: column;
background-color: #22233c;
-webkit-box-shadow: 2px 2px 7px 3px #000000; 
box-shadow: 2px 2px 7px 3px #000000;
position: fixed;
left: 0;
z-index: 1;
transition-duration: 200ms;
transition-timing-function: ease-in-out;
cursor: pointer;
&:hover {
width: 180px;
}

`;

const LogoContainer = styled.div`
    
    position: relative;
`;


export default function Side() {
 




  return (
    <SideBar>
        <LogoContainer>
            
        </LogoContainer>
       
        <Bar>
            Overview
        </Bar>
    </SideBar>
  )
}
