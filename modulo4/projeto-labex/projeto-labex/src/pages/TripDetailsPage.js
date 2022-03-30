import React from 'react'

export default function TripDetailsPage() {
  return (
    <div>
       <header>
       <ul>
        <li>
          <p>Nome:</p>
          <p>Descrição:</p>
          <p>Planeta: </p>
          <p>Duração:</p>
          <p> Data: </p>
        </li>
      </ul>
      <button>Voltar</button>
       </header>
       <main>
           <div>
               <h2> Candidatos Pendentes</h2>
               <ul>
                 
                   <li> Aqui vai a Lista de Candidatos pendentes</li>
               </ul>
           </div>

           <div>
               <h2> Candidatos Aprovados</h2>
               <ul>
                   <li>Aqui vai a lista de Candidatos Aprovados</li>
               </ul>
           </div>
       </main>
    
      
        </div>
  )
}
