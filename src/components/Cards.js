import React from 'react'
import styled from 'styled-components';



const StyledCard = styled.div`
height: 320px;
width: 420px;
border: solid 1px black;
display: flex;
margin: 1rem;
flex-direction: column;
padding: .4rem 1rem;
`

const Flex = styled.div`
display: flex;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
position: relative;
`

export default function Card(props) {
  return (
    <StyledCard>
     
    </StyledCard>
  )
}
