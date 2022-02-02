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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'carlos'}
          fotoUsuario={'https://picsum.photos/id/237/536/354'}
          fotoPost={'https://picsum.photos/200/100'}
        />

        <Post
          nomeUsuario={'Jean'}
          fotoUsuario={'https://picsum.photos/id/1084/536/354?grayscale'}
          fotoPost={'https://picsum.photos/200/180'}
        />
      </MainContainer>
    );
  }
}

export default App;
