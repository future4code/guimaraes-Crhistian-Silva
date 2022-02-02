import React from "react";
import styled from "styled-components";


const MessageSent = styled.div`
    display: flex;
    background-color: crimson;
    border: 1px solid black;
    height: 80vh; 
    justify-content: center;
    align-items: center;
`

function MessageSentContainer () {
    return (
                <MessageSent>
                    Mensagens enviadas
                </MessageSent>
    )
}

export default MessageSentContainer