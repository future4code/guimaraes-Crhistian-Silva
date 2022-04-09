import styled from "styled-components";

export const StyleTripDetailsPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Lobster&display=swap");

  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  font-family: "Lobster", cursive;

  .container-trip-details {
    display: flex;
    text-align: start;
    background-color: #fff;
    border: solid;
    border-radius: 10px 5px;
    width: 60vw;
    font-size: 1.1rem;
  }

  .container-candidate-trip-details {
    display: flex;
    text-align: start;
    background-color: #fff;
    border: solid;
    border-radius: 10px 5px;
    width: 50vw;
    font-size: 1.1re;
  }

  li {
    list-style-type: none;
  }

  h1 {
    color: #fff;
    font-size: 4rem;
    margin-top: 5rem;
  }
  h2 {
    color: #fff;
    font-size: 2rem;
  }

  button {
    height: 40px;
    padding: 0px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 24px;
    min-width: 6rem;
    background: dodgerblue;
    margin-top: 1rem;
    font-family: "Lobster", cursive;
  }

  button:hover {
    cursor: pointer;
  }
  .container-buttons {
    display: flex;
    justify-content: space-evenly;
    width: 30vw;
  }
  .container-candidate-approved {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    color: black;
    background-color: #fff;
    width: 40vw;
    text-align: start;
    border-radius: 20px;
    min-height: 3rem;
  }
  .container-candidate-pending {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    color: black;
    background-color: #fff;
    width: 50vw;
    border-radius: 20px;
    min-height: 3rem;
    text-align: start;
    height: 30rem;
    overflow: scroll;
    ::-webkit-scrollbar{
    width: 10px;
      }
  ::-webkit-scrollbar-track{
    background: #ff0043;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb{
    background: #000000;
    border-radius: 30px;
  }

    button{
      justify-content: space-between;
      margin-left: 10%;
      margin-right: 10%;
    }

`;
