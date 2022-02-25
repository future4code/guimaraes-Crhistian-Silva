import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CadastrosEstilizados = styled.div`
display: flex;
flex-direction: column;
font-weight: bold;
color:  #fff;
width: 30vw;
height: 40vh;
margin-left: 20vw;
justify-content: center;
 background-image: radial-gradient(circle at 20% 14%, rgba(27, 27, 27,0.05) 0%, rgba(27, 27, 27,0.05) 50%,rgba(126, 126, 126,0.05) 50%, rgba(126, 126, 126,0.05) 100%),radial-gradient(circle at 18% 51%, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 50%,rgba(26, 26, 26,0.05) 50%, rgba(26, 26, 26,0.05) 100%),radial-gradient(circle at 29% 38%, rgba(160, 160, 160,0.05) 0%, rgba(160, 160, 160,0.05) 50%,rgba(212, 212, 212,0.05) 50%, rgba(212, 212, 212,0.05) 100%),linear-gradient(90deg, rgb(35, 74, 255),rgb(132, 161, 173));

.form-control{
     margin-left: 1rem;
     caret-color: blue;
}
.form-control2{
    margin-left: 1.6em;
    caret-color: blue;
}
`

const StyleButton = styled.div`
display: flex;
margin-top: 0.2rem;
margin-left: 6rem;
justify-content: center;
align-items: center;
position: relative;
border: none;
outline: none;
width: 100px;
height: 30px;
background-color: #C877E7;
font-size: 1rem;
color: #fff;
border-radius: 7px;
cursor: pointer;
font-family: 'Roboto', sans-serif;

::before{
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #024752;
    z-index: -1;
    border-radius: 7px;
    transform: translateY(3px);
}
:active{
    transform: translateY(3px);
}
:active:before{
    transform: translateY(0)5px;
}  
`
const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "crhistian-felipe-guimaraes"

    }
}

class Cadastros extends React.Component {
    state = {
        usuario: [],
        inputNome: "",
        inputEmail: ""
    }

    onChangeNome = (event) => {
        this.setState({ inputNome: event.target.value })

    }

    onChangeEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }


    createUserApi = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail,
        }

        axios
            .post(urlUsers, body, headers)
            .then((response) => {
                console.log(response.data)
                alert(`O usuário ${this.state.inputNome} foi criado com sucesso`)
                this.setState({ inputNome: "" })
                this.setState({ inputEmail: "" })
               
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }

    render() {

        return (
            <CadastrosEstilizados>
                Cadastro
                <form>
                    <div>
                        <label>Nome</label>
                        <input value={this.state.inputNome}
                            type="text" class="form-control"
                            id="" placeholder="Digite seu nome"
                            onChange={this.onChangeNome}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={this.state.inputEmail}
                            type="email" class="form-control2"
                            id="" placeholder="nome@exemplo.com"
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div>
                        <StyleButton onClick={this.createUserApi}>Enviar</StyleButton>
                    </div>
                </form>
            </CadastrosEstilizados>

        )

    }

}

export default Cadastros