<h1 align="center">
     Promobit-Challenge-Tmdb-movies
</h1>

###  💻 Projeto
O objetivo do projeto é listar os filmes mais populares da TMDB-API,fazer um filtro do filme de acordo com o gênero e acessar detalhes do filme, também criei uma barra de Search para busca de filmes pelo nome.

### 🚀 Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias:
- [React](https://reactjs.org)
- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [Html,Css,Javascript](https://www.w3schools.com/)
- [Styled Components](https://styled-components.com/)
- [TMDB-API](https://developers.themoviedb.org/3/getting-started/introduction)

### ⚙️ Deploy Surge
Acesse aqui o deploy da aplicação no [Surge](https://daffy-help.surge.sh/).

###  🎲 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como o  [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/crhisfoz>

# Acesse a pasta do projeto no terminal/cmd
$ cd promobit

# Instale as dependências
$ npm install ou yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm start ou yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🧠 Desafios completados
#####  Requisitos funcionais
   ##### ✔️ O usuário deve ter acesso a uma listagem dos filmes mais populares do dia
   ##### ✔️ O usuário deve conseguir paginar a lista para encontrar novos filmes
   ##### ✔️ O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um filme na listagem
  ##### ✔️ O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos
 #####  Requisitos não funcionais
  ##### ✔️ O app deverá ser criado usando [React](https://reactjs.org/)I
  ##### ✔️ -   Na raiz do projeto, será necessário incluir um arquivo  `README.md`  com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.
  ##### ✔️ O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge
  ##### ✔️ O app deverá ser responsivo
 
  #### 🎯 Desafios extras
   ##### ✔️ O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
   ##### ✔️ O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
   ##### ✔️❌ A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa.Possui rota própria mas não está indexada.


### ✍🏻 Comentários
 Iniciei o projeto com o create-react-app , defini estilos globais a partir do layout do figma, usei o Styled Components para a construção do CSS de cada componente, utilizei o Axios para integração da Tmdb-Api.
  Fiz uso de um contexto global para fornecer dados da api para o componente Home e GenresFilter.
  

---

Challenge by ♥ [Promobit]()

<h2 align="center">
🤓📚
Desenvolvido por: 
</h2>
<table align="center">
  <tr>
      <td align="center"><a href="https://github.com/crhisfoz">
        <img src="https://avatars.githubusercontent.com/u/89948060?v=4" style="border-radius: 50%" width="100px" alt="Imagem do perfil do Crhistian"/>
      <br />
        <sub><b>Crhistian Felipe da Silva</b></sub>
      <br />
      </td>    
</table>

