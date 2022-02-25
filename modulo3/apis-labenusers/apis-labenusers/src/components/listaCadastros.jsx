import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const ListaEstilizada = styled.div`
display: flex;
flex-direction: column;
font-weight: bold;
width: 50vw;
margin-left: 20vw;
height: 30vh;
background-color: pink;
color: black;
margin-top: 2rem;
height: 20em;
width: 20em;

.botaoNavilink{
    margin-top:5px;
    margin-bottom: 2rem;
}

.botaoNavilink #botao{
    border-radius: 10px;
    border: solid 1px; 
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    background-color: #C877E7;
} 
`

class ListaCadastros extends React.Component {

    render() {

        return (
            <ListaEstilizada  >
                <div class="botaoNavilink">
                <NavLink id='botao' to="/">Troca</NavLink>
                </div>
              {this.props.componenteRenderizado}
            </ListaEstilizada>
        )
    }
}

export default ListaCadastros