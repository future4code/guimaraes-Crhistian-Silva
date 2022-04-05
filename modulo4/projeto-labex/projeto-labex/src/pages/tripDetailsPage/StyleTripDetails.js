import styled from "styled-components";

export const StyleTripDetailsPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Lobster&display=swap");

  margin-left: 10vw;
  margin-right: 10vw;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  display: flex;
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-image: url("/src/img/viagem3.jpg");
  align-items: center;

  .container-lista-tripdetails-page , .container-trip-details {
    display: flex;
    text-align: start;
    background-color: #fff;
    border: solid;
    border-radius: 10px 5px;
    font-size: 1.1rem;
    color: black;
    width: 60vw;
    height: 15rem;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 2rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    
  }

  .container-lista-trip-page li {
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  .container-buttons-trip-page{
    margin-top: 30rem;
    width: 30rem;
    display: flex;
        justify-content: space-around;
  }
  button{
    margin-top: 1rem;
        height: 3rem;
        border: none;
        color: white;
        border-radius: 6px;
        font-size:2rem;
        width:10rem;
        background: dodgerblue;
        font-family: "Lobster", cursive;
        :hover{
          cursor: pointer;
        }
    }

    li {
    list-style-type: none;
  }
  
    @media screen and (min-device-width : 376px) and (max-device-width : 480px) {
      display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

      .container-buttons-trip-page{
    width: 20rem;
    display: flex;
    justify-content: space-around;
  }

}

   `
