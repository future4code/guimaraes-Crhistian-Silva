import React from 'react'
import './App.css'
import Cadastros from './components/cadastros'
import ListaCadastros from './components/listaCadastros'


class App extends React.Component{
  render(){
    return(
      <>
      <Cadastros/>
      <ListaCadastros/>
      </>
    )
  }
}

export default App