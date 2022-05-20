import React, { Component } from "react";
import "./App.css";
import Post from "./componetns/Post";

class App extends Component {
  state = {
    listaDePosts: undefined,
    textoNovoPost: ""
  };

  onChangeTextoNovoPost = event => {
    this.setState({ textoNovoPost: event.target.value });
  };

  adicionarPost = () => {
    // Adiciona um post à lista
    const novoPost = {
      id: Date.now(),
      texto: this.state.textoNovoPost,
      curtido: false
    };

    const novaListaDePosts = [novoPost, ...this.state.listaDePosts];

    this.setState({ listaDePost: novaListaDePosts });
  };

  apagarPost = postId => {
    // Apaga um post da lista
    const novaListaDePosts = this.state.listaDePosts.filter(past => {
      return postId !== post.id;
    });

    this.setState({ listaDePosts: novaListaDePosts });
  };

  alterarCurtida = postId => {
    // Altera o status de curtida de um post da lista
    const novaListaDePosts = this.state.listaDePosts.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          curtido: post.curtido
        };
        return novoPost;
      } else {
        return post;
      }
    });

    this.setState({ listaDePosts: novaListaDePosts });
  };

  render() {
    return (
      <div className="App">
        <div>
          <input
            type="text"
            onChange={this.onChangeTextoNovoPost}
            value={this.state.textoNovoPost}
          />
          <button onClick={this.adicionarPost}>Adicionar</button>
        </div>
        <br />
        {this.state.listaDePosts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
              alterarCurtida={this.alterarCurtida}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
