import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    white-space: normal;
    img{
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }
    h4{
        display: flex;
        margin-bottom: 1vh;
    }
    p{
        display: flex;
    }
 `
function CardGrande(props) {
    return (
        <BigCardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;