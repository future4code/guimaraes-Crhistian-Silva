import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormAdicionaPost = styled.div`
  display:flex;
  border: 1px solid gray;
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
  background-color: gray;

`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha', 
        fotoUsuario: 'https://picsum.photos/50/50',
         fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'carlos',
        fotoUsuario: 'https://picsum.photos/id/237/536/354',
        fotoPost: 'https://picsum.photos/200/100'
      },
      {
        nomeUsuario:'Jean',
        fotoUsuario:'https://picsum.photos/id/1084/536/354?grayscale',
        fotoPost: 'https://picsum.photos/200/180'
      }
    ],
    valorInputNome: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: '',
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    }
    const novoPost2 = [...this.state.posts, novoPost];
    this.setState({ posts: novoPost2})
  };

onChangeInputNomeUsario = (event) =>{
  this.setState({ valorInputNome: event.target.value})

}
onChangeInputFotoUsario = (event) =>{
  this.setState({ valorInputFotoUsuario: event.target.value})

}
onChangeInputFotoPost= (event) =>{
  this.setState({ valorInputFotoPost: event.target.value})
}
  render() {
    const componentPost = this.state.posts.map((pessoa,index) =>{
      return <Post nomeUsuario={pessoa.nomeUsuario} fotoUsuario={pessoa.fotoUsuario}  fotoPost={pessoa.fotoPost}/> 

    }
  );

    return (
      <MainContainer>
        <div>
          {componentPost}
        </div>

        <FormAdicionaPost>
          <form>
            <input
            value={this.state.valorInputNome}
            placeholder='Nome'
            onChange={this.onChangeInputNomeUsario}
            />
            <input
            value={this.state.valorInputFotoUsuario}
            placeholder='Foto Usuário'
            onChange={this.onChangeInputFotoUsario}
            />
            <input
            value={this.state.valorInputFotoPost}
            placeholder='Foto Post'
            onChange={this.onChangeInputFotoPost}
            />
            <button onClick={this.adicionaPost}>ENVIAR</button>
          </form>
        </FormAdicionaPost>
        
      </MainContainer>
    );
  }
}

export default App;
