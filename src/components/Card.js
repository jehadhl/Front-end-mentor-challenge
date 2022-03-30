import React from 'react'
import { StyledCard, StyledDiv } from './styles/Card.styled'

export default function Card({item:{id,title,image,body}}) {
  return (
    <StyledCard  layout = {id % 2 === 0 && 'row-reverse'}>
        <StyledDiv>
            <h2 style={{margin:'0px'}}>{title}</h2>
            <p>{body}</p>
        </StyledDiv>
        <div>
             <img src={`./images/${image}`}></img>
        </div>
    </StyledCard>
  )
}
