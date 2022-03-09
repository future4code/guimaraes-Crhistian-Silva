import React from 'react';
import styled from 'styled-components';


const ListaEstilizada = styled.div`
display: flex;
flex-direction: column;
font-weight: bold;
color:  #fff;
width: 40vw;
height: 50vh;
margin-left: 20vw;
margin-top: 2rem;
background-image: radial-gradient(circle at 20% 14%, rgba(27, 27, 27,0.05) 0%, rgba(27, 27, 27,0.05) 50%,rgba(126, 126, 126,0.05) 50%, rgba(126, 126, 126,0.05) 100%),radial-gradient(circle at 18% 51%, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 50%,rgba(26, 26, 26,0.05) 50%, rgba(26, 26, 26,0.05) 100%),radial-gradient(circle at 29% 38%, rgba(160, 160, 160,0.05) 0%, rgba(160, 160, 160,0.05) 50%,rgba(212, 212, 212,0.05) 50%, rgba(212, 212, 212,0.05) 100%),linear-gradient(90deg, rgb(35, 74, 255),rgb(132, 161, 173));
`
const BotaNavegacao = styled.a`
    border-radius: 10px;
    border: solid 1px; 
    color: #fff;
    padding: 0.5rem;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

`
const DivBusca = styled.div`
    input{
        margin-left: 0.2rem;
        margin-top: 0.7rem;
        caret-color: blue;
    }
`
class ListaCadastros extends React.Component {

    render() {

        return (
            <>
            <BotaNavegacao id='botao' href="/">Ir para Tela de Cadastro</BotaNavegacao>
            <DivBusca>
            <input
            placeholder='Digite Sua Busca'
            value={this.props.valorInputNome}
            onChange={this.props.valorOnchageNome}
                /> 
                <button onClick={this.props.valorBusca}>BUSCA</button>
            </DivBusca>
            
            <ListaEstilizada  >
              {this.props.componenteRenderizado}
            </ListaEstilizada>
            </>
            
        )
    }
}

export default ListaCadastros