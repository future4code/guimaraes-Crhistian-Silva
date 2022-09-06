<h1 align="center">Projeto Cookenu</h1>

<p>Link para Conferir a DOCUMENTAÇÃO => <a href="https://documenter.getpostman.com/view/19720614/VUxKTUvQ" target="_blank">Cookenu API</a>.</p>
<p>Link do Deploy Heroku => <a href="https://cookenu-crhis.herokuapp.com/" target="_blank">Heroku-Projeto-Cookenu</a>.</p>

<h1 id="topo">Conteúdo</h1>

- [Sobre](#sobre)

- [O que funciona](#funciona)

- [Como usar](#como-usar)

- [Pré-Requisitos](#pré-requisitos)

- [Tecnologias](#tecnologias)
  _ Typescript: 4.7.4
  _ Express: 4.18.1
  _ Ts-node-dev: 2.0.0
  _ Cors: 2.8.5
  _ Ts-node: 10.8.1
  _ Uuid: 8.3.2
  _ Dotenv: 16.0.1
  _ Mysql: 2.18.1
  _ Knex: 2.2.0
  _ Bcryptsjs: 2.4.3
  _ Jsonwebtoken: 8.5.1,
  _ Nodemailer: 6.7.8
  _ @types/cors": 2.8.12
  _ @types/express": 4.17.13
  _ @types/knex": 0.16.1
  _ @types/node": 18.6.2
  _ @types/uuid": 8.3.4
  _ @types/bcryptjs: 2.4.2
  _ @types/jsonwebtoken: 8.5.8
  _ @types/nodemailer: 6.4.5

        <h2 id="sobre">:notebook: Sobre </h2>

  💬 estudante da <a href="http://www.labenu.com.br" target="_blank">Labenu</a> Projeto desenvolvido com Programação Orientada a Objetos baseado em Arquitetura de 3 camadas, também foi feito algumas injeções de dependências com alguns conceitos de Arquitetura Limpa, tendo  duas entidades principais Usuários(User) e Receitas(Recipe), com seus diversos atributos e métodos, foi feito o encapsulamento para que haja a segurança dos dados recebidos, verificações necessárias e criado criptografia de Password para inserção no banco de dados, o principal desafio desse projeto foi entender quais endpoints precisam de certas verificações mais robustas e outros não, acredito que todas as validações estão robustas dentro do que foi pedido.
  O projeto se apresenta na forma de comandos que interagem com Usuários e Receitas, baseando-se em uma relação de um site ou app de culinária onde existem interações entre usuários -> receitas e também usuários -> usuários, onde pode-se criar usuários, criar receitas, criar relações de seguir usuários, e também deixar de segui-los, também foram criados comandos de busca de receitas específicas através do seu Id, buscar todas as receitas de um determinado do usuário seguido, foi criado endpoint para troca de senha através de um link enviado no e-mail cadastrado no banco de dados, e também existe o endpoint para deletar a conta que pode ser acessado tanto pelo próprio usuário ou por um usuário que esteja cadastrado no banco de dados como "admin", todos os dados requisitados para que os comandos de endpoints funcionem e suas formas corretas de uso, estão explicitados no Link da Documentação do Postman em anexo
  <h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="funciona">:rocket: O que funciona </h2>
➡️Todas as Funcionalidades Solicitadas na Descrição do Projeto foram realizadas<br>

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="pre-requisitos">✅ 🖼️ Pré-requisitos </h2>
Para começar, você terá que  instalar em sua máquina as seguintes ferramentas: Git, Node.js., Express, TypeScript, Cors, Ts-node-dev, UUid, Axios, Mysql, Dotenv, Jsonwetoken, Bcrypt, Nodemailer e seus respectivos types, também um editor de código-fonte para trabalhar com o código, usei o VS Code.

```bash

# Instale as dependências
$ npm i ou npm install

# Para iniciar o projeto
$ npm start

# O servidor inciará na porta:3003 - acesse <http://localhost:3003>
```

<h4 align="right"><a href="#topo">Topo</a></h4>

<h4 align="right"><a href="#topo">Topo</a></h4>

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
