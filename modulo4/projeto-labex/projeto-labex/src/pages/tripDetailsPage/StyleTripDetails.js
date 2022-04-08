import styled from "styled-components";

export const StyleTripDetailsPage = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Lobster&display=swap");

  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-trip-details{
  display: flex;
    text-align: start;
    background-color: #fff;
    border: solid;
    border-radius: 10px 5px;
    width: 60vw;
    font-size: 1.1rem;
 }

.container-candidate-trip-details{
  display: flex;
    text-align: start;
    background-color: #fff;
    border: solid;
    border-radius: 10px 5px;
    width: 50vw;
    font-size: 1.1re;
    margin-top: 1rem;
}

li{
    list-style-type: none;
}

 h1{
   color: #fff;
 }
 button{
        height: 40px;
        padding: 0px 20px;
        border-radius: 20px;
        border: none;
        color: white;
        font-size: 16px;
        min-width: 100px;
        background: dodgerblue;
        margin-top: 1rem;
    }

    button:hover {
        cursor: pointer;
      }
.container-buttons{
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
  min-height:3rem;
}
 .container-candidate-pending{
   display: flex;
  border: 1px solid black;
  color: black;
  background-color: #fff;
  width: 60vw;
  border-radius: 20px;
  min-height:3rem;
  text-align: start;
}
`
