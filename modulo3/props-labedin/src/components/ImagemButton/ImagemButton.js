import React from 'react';
import styled from 'styled-components'

const ImageButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px ;
    position: relative;
    background-color: white;
    border-radius: 5vh;
    width: 25vh;
    padding: 1.5vh 3vh;
    margin: 1vh auto;
    ::before{
        content: '';

        position: absolute;
        inset: 0;

        background: linear-gradient(to bottom right, #6889FF 0%, #C668FF 100%);
        
        z-index: -1;
        margin: -4px;
        border-radius: 8px;
    }
    
    } 
    img{
        display: flex;
        width: 6vh;
        justify-content:center;
        margin-left: 2vh;
    }
    p{
        display: flex;  
    }
`

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <a href={props.link}>
            <img src={ props.imagem}/>
            <p>{ props.texto }</p>
            </a>
        </ImageButtonContainer>

    )
}

export default ImagemButton;