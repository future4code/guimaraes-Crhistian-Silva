import "./App.css";
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import TelaInicial from './components/telaInicial';
/* import ListaContatos from "./components/lista-contatos"; */


function App() {

  return (
    <>
    <Routes>
    < Route path="/" element={<TelaInicial/>} />
    {/* <Route path="/lista-contatos" element={<ListaContatos/>} />   */}
    </Routes>
   
    </>
  )
}

export default App