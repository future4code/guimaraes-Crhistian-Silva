import React from 'react';
import styled from 'styled-components';
import avatar from '../img/boy.png'

const UserName = styled.div`
    display: flex;
    text-align: flex-end;
    input{
        display:flex;
        background-color: yellow;
        width: 100%;
        padding-top: 15px;
    }
    img{
        display:flex;
        width: 3vw;
        height: 5vh;
        align-self: flex-end;
    }

`

function UserContainer() {
    return (

        <UserName>
            <img src={avatar}/>
            <input className="UserName" placeholder="Usuário"/>
        </UserName>
    )
}


export  default UserContainer