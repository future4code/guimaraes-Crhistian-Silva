import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
`
const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "crhistian-felipe-guimaraes"

    }
}

class ListaCadastros extends React.Component {
    state = {
        usuario: []
    }

    getUserApi = () => {
        axios
            .get(urlUsers, headers)
            .then((response) => {
                console.log(response.data)

            })
            .catch((error) => {
                console.log(error.data.result.list)

            })

    }

    componentDidMount() {
        this.getUserApi()
    }

    render() {

        const usuarioComponente = this.state.usuario.map((user) => {
            return <li key={user.id}> {user.name}  <button>Del User</button></li>
        });

        return (
            <ListaEstilizada >
                aqui vai a lista
                {usuarioComponente}

            </ListaEstilizada>
        )
    }
}

export default ListaCadastros