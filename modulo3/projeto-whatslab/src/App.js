import './App.css';
import React from "react";
import styled from "styled-components";

/*-----------------ESTILIZAÇÃO DO BODY DO PROJETO-----------------------*/

const BodyWatsLabContainer = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
height: 70vh;
margin: 2em auto;
`
/*---------------------------------------------------------------------*/

/*--------------ESTILIZAÇÃO DO MAP -------------------*/
const StyleMap = styled.div`
    display: flex;
    height: 20px;
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    border-radius: 20px;
    height:  4vh;
    width: max-content;
    align-items: center;
    font-family: cursive;
    padding-right: 5px;
    margin-bottom: 5px;
    color: black;
    padding-left: 5px;
p{
    display:flex;
    height: 20px;
    padding-left: 5px;
    border-radius: 15px 20px
    height: 20vh;
    font-size: 16px;
}
.NameUser{
    text-transform: uppercase;
}
`
/*---------------------------------------------------------*/

/*--------------ESTILIZAÇÃO DO CONTAINER QUE RECEBE RETORNO DO MAP -------------------*/

const MessageSent = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    justify-content: flex-end;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    overflow-x: auto;
    overflow-x: auto;
    align-items: flex-start;
    align-content: flex-end;
    height: inherit;
    position: relative;
`
/*--------------------------------------------------------------------------------*/

/*---------------------ESTILIZAÇÃO DO CONTAINER DOS ELEMENTOS DO INPUT E BUTTON------------------*/
const UserMessageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    width: auto;

    input{
       
        background-color: #FFDEE9;
        background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
        width: 100%;
        padding-top: 15px;
        padding-left: 10px;
        border-radius: 2vh 2vh;
        caret-color: red;
        display: block;
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
/*--------------------------------------------------------------------------------*/

/*---------------------ESTILIZAÇÃO DO BUTTON------------------*/
const SendButton = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: auto;
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
    transform: translateY(1px)}
}
`
/*--------------------------------------------------------------------------------*/

class App extends React.Component{
    state = {
        bodyMessage :[],
        inputUser: '',
        inputMessage: '',
    
      }

onChangeUser = (event) => {
        this.setState({inputUser: event.target.value})
        console.log(this.state)
    }

onChangeMessage = (event) =>{
        this.setState({inputMessage: event.target.value})
    }
onChangeEmotion =(onclick) =>{
    this.setState({emotion: onclick.target.value})
}
    
onClickMessage = () => {
    const bodyMessages = {
        id: Math.random(),
        user: this.state.inputUser,
        message: this.state.inputMessage,
        emotion: this.state.emotion
    }
    const newBodyMessages = [...this.state.bodyMessage, bodyMessages]
    this.setState({bodyMessage: newBodyMessages})
    this.setState({inputUser: '', inputMessage: '', emotion: ''})
}
    render() {
        const bodyMessageComponente = this.state.bodyMessage.map((message,index)=>{
            return( 
                       <StyleMap><p className='NameUser' key={index.id}> <i><b>{message.user}:</b></i></p> <p> {message.message} {message.emotion}</p></StyleMap>  
            );
        });
     
        return(
                
                <BodyWatsLabContainer>
                    <MessageSent>
                        {bodyMessageComponente}
                    </MessageSent>

                    <UserMessageContainer>
                        <select>
                            <option></option>
                            <option>&#128102;Boy</option>
                            <option>&#128103;Girl</option>
                        </select>
                        <input className="bodyUser"placeholder="USUÁRIO" value={this.state.inputUser} onChange={this.onChangeUser}/>
                        <input className="bodyMessage" placeholder='DIGITE SUA MENSAGEM' value={this.state.inputMessage} onChange={this.onChangeMessage} />
                        <select value={this.emotion} onChange={this.onChangeEmotion}>
                            <option></option>
                            <option>&#128526;</option>
                            <option>&#128521;</option> 
                            <option>&#128524;</option>
                            <option>&#128523;</option>
                            <option>&#128512;</option>
                            <option>&#128575;</option>
                            <option>&#128515;</option>
                            <option>😏</option>
                            <option>👻</option>
                            <option>😅</option>
                            <option>🙊</option>
                            <option>😭</option>
                        </select>
                        <SendButton onClick={this.onClickMessage}>ENVIAR</SendButton>
                    </UserMessageContainer>
                    
                </BodyWatsLabContainer>
        )
    }
}

export default App;
