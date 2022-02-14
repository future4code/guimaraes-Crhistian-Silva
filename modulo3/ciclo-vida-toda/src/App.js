import React from 'react'
import styled from 'styled-components'
import { JsxEmit } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [ {
        id: Date.now(),
        texto: 'Acordar Cedo',
        completa: false,
      }, 
      {
        id: Date.now(),
        texto: 'Ir pra Fisioterapia',
        completa: true,

      }
    ],
      inputValue: '',
      filtro: 'pendentes'
    }


  

  componentDidUpdate() {
   /*  this.guardarTarefasLocalStorage() */

  };

  componentDidMount() {
    this.pegarTarefasLocalStorage()
 
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})

  }
 /*  guardarTarefasLocalStorage = () => {
    const tarefa = {
      id: this.state.id,
      texto: this.state.texto,
      completa: this.state.completa
    }
    localStorage.setItem("tarefas", JSON.stringify(tarefa))
   
  }
 */
  pegarTarefasLocalStorage = () => {
    const tarefaString = localStorage.getItem("tarefas")
    const tarefas = JSON.parse((tarefaString))

    if(tarefas){
      this.setState({
        id: tarefas.id,
        texto: tarefas.texto,
        completa: tarefas.completa
      })

    } 
  }

  criaTarefa = () => {
    if(!this.state.inputValue) return alert("Necessário informar uma tarefa");

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }
    
    localStorage.setItem("tarefas", JSON.stringify(novaTarefa))

    const copiaEstado = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: copiaEstado,})
    this.setState({inputValue: ''})

  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const novaTarefa = {
         ...tarefa,
         completa: !tarefa.completa
        }
        return novaTarefa
      }else{
        return tarefa
      }
    }
    )
    this.setState({tarefas: novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
