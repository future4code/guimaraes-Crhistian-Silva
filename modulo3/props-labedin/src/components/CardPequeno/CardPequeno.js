import React from "react"
import styled from 'styled-components'



const StyleSmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 2vh 1vh;
    margin-bottom: 1vh;
    height: 8vh;
    img{
        width: 7vh;
        margin-right: 1vh;
        border-radius: 50%;
    }
    h4{
        padding-right: 1vh
    }
`
function CardPequeno (props) {
    return(
        <StyleSmallCard>
            <img src={props.imagem}/>
            <h4>{props.titulo}</h4>
            <p>{props.dadoinserido}</p>
        </StyleSmallCard>

    )
}

export default CardPequeno