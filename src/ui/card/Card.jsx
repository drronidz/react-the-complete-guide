import React from "react";
import styled from 'styled-components'

const Card = styled.div`
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 1rem;
    background-color: rgb(31, 31, 31);
    margin: 2rem auto;
    width: 100%;
    max-width: 95%;
    
    @media (min-width: 768px) {
      width: auto;
      
    }
`

// const Card = (props) => {
//     const classes = 'card ' + props.className
//     return <div className={classes}>
//         {props.children}
//     </div>
// }

export default Card