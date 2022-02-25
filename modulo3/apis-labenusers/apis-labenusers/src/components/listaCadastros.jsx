import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const ListaEstilizada = styled.div`
display: flex;
flex-direction: column;
font-weight: bold;
width: 50vw;
height: 40vh;
margin-left: 20vw;
margin-top: 2rem;
background-image: radial-gradient(circle at 20% 14%, rgba(27, 27, 27,0.05) 0%, rgba(27, 27, 27,0.05) 50%,rgba(126, 126, 126,0.05) 50%, rgba(126, 126, 126,0.05) 100%),radial-gradient(circle at 18% 51%, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 50%,rgba(26, 26, 26,0.05) 50%, rgba(26, 26, 26,0.05) 100%),radial-gradient(circle at 29% 38%, rgba(160, 160, 160,0.05) 0%, rgba(160, 160, 160,0.05) 50%,rgba(212, 212, 212,0.05) 50%, rgba(212, 212, 212,0.05) 100%),linear-gradient(90deg, rgb(35, 74, 255),rgb(132, 161, 173));
margin-top: 2rem;
height: 20em;
width: 20em;

.botaoNavilink{
    margin-top: 0.5rem;
    margin-bottom: 2rem;
}

.botaoNavilink #botao{
    border-radius: 10px;
    border: solid 1px; 
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    background-color: #C877E7;
    color: #fff;
} 
`

class ListaCadastros extends React.Component {

    render() {

        return (
            <ListaEstilizada  >
                <div class="botaoNavilink">
                <NavLink id='botao' to="/">Ir Para Tela de Cadastro</NavLink>
                </div>
              {this.props.componenteRenderizado}
            </ListaEstilizada>
        )
    }
}

export default ListaCadastros