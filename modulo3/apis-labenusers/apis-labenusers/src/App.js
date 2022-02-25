import React from 'react'
import './App.css'
import Cadastros from './components/cadastros'
import ListaCadastros from './components/listaCadastros'
import axios from 'axios'



const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "crhistian-felipe-guimaraes"

    }
}

class App extends React.Component{
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

getUserApi = () => {
  axios
      .get(urlUsers, headers)
      .then((response) => {
          this.setState({ usuario: response.data})
          console.log(response.data)
      })
      .catch((error) => {
          console.log(error)
      })
}

onClickDelUser = (idUser) => {
  axios
  .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`, headers)
  .then((response)=>{
      this.getUserApi()
      console.log(response)
  })
  .catch((error)=>{
      console.log(error.response)
  })

}

componentDidMount() {
 this.getUserApi()
}


  render(){
    const usuarioComponente = this.state.usuario.map((user) => {
      return (
      <>
        <li key={user.id}> {user.name}
        <button onClick={() => this.onClickDelUser(user.id)}> DEL USER</button></li>
      </>
    
      )
        
  });

    return(
      <>

   <Cadastros 
   valorInputNome={this.state.inputNome}
   valorInputEmail={this.state.inputEmail}
   valorOnchageNome={this.onChangeNome}
   valorOnchageEmail={this.onChangeEmail}
   valorBotao={this.createUserApi}
   />
  <ListaCadastros
  saudacao={'Aqui vai o retorno do map'}
  componenteRendeizado={usuarioComponente}
  />
      </>
    )
  }
}

export default App