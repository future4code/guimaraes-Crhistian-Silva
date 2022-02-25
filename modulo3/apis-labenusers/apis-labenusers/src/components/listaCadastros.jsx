import React from 'react'
import styled from 'styled-components'


const ListaEstilizada = styled.div`
display: flex;
flex-direction: column;
font-weight: bold;
width: 50vw;
margin-left: 20vw;
height: 30vh;
justify-content: center;
background-color: pink;
color: black;
margin-top: 2rem;
height: 20em;
width: 20em;
button{
    margin: 1em;
}
`

class ListaCadastros extends React.Component {
 
   
    render() {

        return (
            <ListaEstilizada  >
                {this.props.saudacao}
                {this.props.componenteRendeizado}
                {this.props.valorRenderizacao}
              
            </ListaEstilizada>
        )
    }
}

export default ListaCadastros