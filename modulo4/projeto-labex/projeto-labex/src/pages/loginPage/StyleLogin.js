import styled from "styled-components";

export const StyleLogin = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

  color: #fff;
  font-size: 2rem;
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  font-family: "Lobster", cursive;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  #exampleInputEmail1 {
    margin-left: 3.5rem;
  }
  h2 {
    font-family: "Lobster", cursive;
    font-size: 6rem;
    margin-top: 6rem;
    color: #fff;
  }

  .button {
    display: flex;
    margin-bottom: 15px;
    height: 3rem;
    border: none;
    color: #fff;
    border-radius: 6px;
    font-size: 20px;
    min-width: 150px;
    background: dodgerblue;
    font-family: "Lobster", cursive;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  }
  button {
    margin-bottom: 15px;
    height: 3rem;
    border: none;
    color: #fff;
    border-radius: 6px;
    font-size: 20px;
    min-width: 150px;
    background: dodgerblue;
    font-family: "Lobster", cursive;
    align-items: center;
    justify-content: center;
  }
  input {
    height: 1.4rem;
    margin-left: 5px;
    width: 40vw;
    border-radius: 30px;
    caret-color: #c93c3c;
  }
  .mb-3 {
    display: flex;
    align-items: center;
    align-content: start;
    justify-content: start;
  }
`;
