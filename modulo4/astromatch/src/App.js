import "./App.css";
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import TelaInicial from './components/telaInicial';


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