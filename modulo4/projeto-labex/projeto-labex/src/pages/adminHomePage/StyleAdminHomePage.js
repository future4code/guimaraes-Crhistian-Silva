import styled from "styled-components";

export const StyleAdminHomePage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

  padding: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-image: url("/src/img/viagem3.jpg");
  font-family: "Lobster", cursive;

  .container-lista {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    width: 500px;
    height: 80vh;
    background-color: #fff;
  }

  .retorno-lista {
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0px;
    font-family: "Lobster", cursive;
  }

  button {
    margin-bottom: 15px;
    height: 40px;
    padding: 0px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 20px;
    min-width: 100px;
    background: dodgerblue;
    font-family: "Lobster", cursive;
  }

  button:hover {
    cursor: pointer;
  }

  .lista-p {
    display: flex;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 460px;
    font-family: "Lobster", cursive;
  }
  .lista-p :hover {
    font: bolder;
    font-size: large;
  }
  p {
    color: rgb(57, 65, 69);
    font-family: Open-Sans, Helvetica, sans-serif;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: "Lobster", cursive;
    font-size: 1.2rem;
  }

  .icone {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
  }

  .icone :hover {
    background-color: red;
  }
`;
