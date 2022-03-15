import React from 'react'
import styled from 'styled-components'

const DivBotao = styled.div`
float:left;
width: 100%;
text-align: center;
.Botao{
    display: inline-block;
    border: 0;
    padding: 10 px 20px;
    background: black;
    color: red;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    font-size: 17px;
:hover{
    opacity: 0.6}
}


`

class Botao extends React.Component{
    render(){
        return(<DivBotao>
            <button className='Botao'> MOSTRAR PLAYLISTS </button>
        </DivBotao>
            
        )
    }
}

export default Botao