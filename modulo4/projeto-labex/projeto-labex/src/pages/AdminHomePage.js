import React from 'react'

export default function AdminHomePage() {
  return (
    <div>
        <header>
        <h2>Painel Administrativo</h2>
        <button> voltar</button>
        <button>Criar Viagem</button>
        <button>Logout</button>
        </header>
        <main>
            <ul>
                <span> nome de quem vai viajar</span>
                <button>Deletar Viajante</button>
            </ul>
        </main>
        
    </div>
  )
}
