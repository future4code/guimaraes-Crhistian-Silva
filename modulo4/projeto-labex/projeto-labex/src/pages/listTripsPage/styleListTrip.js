import styled from "styled-components";

export const StyledListTripsPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Lobster&display=swap");
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  font-family: "Lobster", cursive;

  li {
    list-style-type: none;
  }
  .container-lista-trip-page {
    display: flex;
    flex-direction: column;
    text-align: start;
    background-color: #fff;
    border: solid;
    border-radius: 10px 5px;
    width: 60vw;
    font-size: 1.1rem;
    font-family: "Lobster", cursive;
    margin-top: 1rem;
      }
  h1 {
    color: #fff;
    font-size: 4rem;
  }

  .container-lista-trip-page li {
    font-family: "Kalam", cursive;
  }
  .container-buttons-trip-page {
    margin-top: 2rem;
    width: 30rem;
    display: flex;
    justify-content: space-around;
  }
  button {
    margin-bottom: 15px;
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

`;
