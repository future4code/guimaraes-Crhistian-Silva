import styled from "styled-components";

export const StyleHomePage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 0px;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/src/img/viagem3.jpg");
  justify-content: center;
  align-items: center;
  font-size: 5rem;

  .container-buttons-trip-page {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  button {
    margin-bottom: 15px;
    height: 40px;
    padding: 0px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 2rem;
    width: 15rem;
    height: 5rem;
    background: dodgerblue;
    font-family: "Lobster", cursive;
  }

  button:hover {
    cursor: pointer;
  }
  @media screen and (min-device-width : 320px) and (max-device-width:1300px) {
    
    .container-buttons-trip-page {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

}
`;
