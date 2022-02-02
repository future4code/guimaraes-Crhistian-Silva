import React from 'react';
import styled from 'styled-components';

const SendButton = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 50vh 5vh;
    background: linear-gradient(to right, #c02425, #f0cb35);
    text-align: center;
    color: white;
    :hover{
        transform: translateX(0) scale(1.1)
    }
::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    background: linear-gradient(to bottom right, #6889FF 0%, #C668FF 100%); 
    z-index: -1;
    border-radius: 2vh 1vh; 
}
:active{
    transform: translateY(1px)
}
p{
    font-size: 18px;
}
`

export class ButtonContainer extends React.Component {

    sentMessage = () =>{
        console.log('mensagem enviada')
    }

render () {
    return <SendButton onClick={this.sentMessage}>
                <p>ENVIAR</p>
            </SendButton>
    }
}


export  default ButtonContainer


