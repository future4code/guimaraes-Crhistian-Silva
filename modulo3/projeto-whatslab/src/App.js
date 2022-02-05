import './App.css';
import React from "react";
import styled from "styled-components";
import avatar from './img/boy.png';

const BodyWatsLabContainer = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
height: 70vh;
margin: 50px;
`
const MessageSent = styled.div`
  display: flex;
  flex-direction: column;
    background-color: yellow;
    border: 1px solid black;
    height: 60vh;
    justify-content: flex-end;
 
`
const StyleMap = styled.div`
display: flex;

p{
      display:flex;
      height: 20px;
      background-color: blue;
      color: white;
      padding-left: 5px;
    }
`
const UserMessageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    
    
    input{
        background-color:cyan;
        width: 100%;
        padding-top: 15px;
        border: 1px 0 solid;
        
    }
    img{
        display:flex;
        width: 3vw;
        height: 5vh;
        align-self: flex-start;
    }
    .bodyUser{
        width: 10vw;
    }
`
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
}
`
class App extends React.Component{
    state = {
        bodyMessage :[],
        inputUser: '',
        inputMessage: ''   
      }
    
  onChangeUser = (event) => {
        this.setState({inputUser: event.target.value})
        console.log(this.state)
    }

    onChangeMessage = (event) =>{
        this.setState({inputMessage: event.target.value})
        console.log(this.state)
    }

    onClickMessage = () =>{
        const bodyMessages = {
            id: Math.random(),
            user: this.state.inputUser,
            message: this.state.inputMessage,
           
        }
        const newBodyMessages = [...this.state.bodyMessage, bodyMessages]
        this.setState({bodyMessage: newBodyMessages})
        this.setState({inputUser: '', inputMessage: ''})
        console.log('mensagem enviada', this.state)
    }
    render() {
        const bodyMessageComponente = this.state.bodyMessage.map((message,index)=>{
            return( <StyleMap><p key={index.id}> <b>{message.user}: </b> </p> <p> {message.message}</p></StyleMap>);
          }
          );
     
        return(
                
                <BodyWatsLabContainer>
                    <MessageSent>
                     {bodyMessageComponente}
                    </MessageSent>
                    <UserMessageContainer>
                      <img src={avatar}/>
                      <input className="bodyUser"placeholder="USUÁRIO" value={this.state.inputUser} onChange={this.onChangeUser}/>
                      <input className="bodyMessage" placeholder='DIGITE AQUI' value={this.state.inputMessage} onChange={this.onChangeMessage}/>
                      <SendButton onClick={this.onClickMessage}>ENVIAR</SendButton>
                    </UserMessageContainer>
                    
                </BodyWatsLabContainer>
        )
    }
  }

export default App;
