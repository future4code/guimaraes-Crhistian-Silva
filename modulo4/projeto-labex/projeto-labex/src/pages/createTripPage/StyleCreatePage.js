import styled from "styled-components";

export const StyleCreatePage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .container-buttons-create-page {
    justify-content: center;
    height: 20vh;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  .container-buttons-create-page,
  select,
  input {
    width: 50vh;
    height: 40px;
    margin-bottom: 5px;
    border-radius: 6px;
  }
  h2 {
    font-family: "Lobster", cursive;
    font-size: 4rem;
    margin-top: 2rem;
    color: #fff;
  }
  button {
    height: 3rem;
    padding: 0px 20px;
    border: none;
    color: white;
    border-radius: 6px;
    font-size: 20px;
    min-width: 100px;
    background: dodgerblue;
    font-family: "Lobster", cursive;
    :hover {
      cursor: pointer;
    }
  }
  #button-back {
    margin-top: 1rem;
  }
`;
