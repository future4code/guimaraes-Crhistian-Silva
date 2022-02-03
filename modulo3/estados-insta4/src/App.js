import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      }
    ]
  }

  render() {
    const componentPost = this.state.posts.map((pessoa) =>{
      return (
    <Post>
          <p>{pessoa.nomeUsuario}</p>,
          <img src={pessoa.fotoUsuario}/>,
          <img src={pessoa.fotoPost}/>

    </Post>
          
  
      )
    }
  );

    return (
      <MainContainer>
        <Post>
        {componentPost}
        </Post>
      </MainContainer>
    );
  }
}

export default App;
