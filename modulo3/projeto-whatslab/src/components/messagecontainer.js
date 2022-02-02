import React from "react";
import styled from "styled-components";


const UserMessage = styled.div`
   display: grid;
    grid-column: 2 / 5;
    background-color: blue;
    
    input{
        background-color: yellow;
        width: 100%;
        padding-top: 15px;
        
    }
`

class MessageContainer extends React.Component{

  textMessage = message => {
      if(message.keyCode === 13){
          const messageSent = message.target.value
          console.log(messageSent)
          
      }
     
  }

    render(){
        return(
                
                <UserMessage>
                    <input className='UserMessage' type="text" name="mensagem" placeholder='Mensagem' onKeyDown={(message) => this.textMessage(message)}/>
                </UserMessage>
        )
    }
}

/* function MessageContainer () {

    return (
                <UserMessage>
                    <input className='UserMessage' name="mensagem" placeholder='Mensagem'/>
                </UserMessage>
    )
} */

export default MessageContainer