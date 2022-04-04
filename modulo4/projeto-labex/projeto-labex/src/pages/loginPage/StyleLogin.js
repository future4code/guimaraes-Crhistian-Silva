import styled from "styled-components";

export const StyleLogin = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

color: #fff;
font-size: 2rem;
 display: grid;
    width: 100vw;
    height: 100vh; 
    justify-content: center;

 h2{
    font-family: 'Lobster', cursive;
    font-size:6rem ;
    margin-top: 10rem;
    color: #fff;
}

button, .button{
    margin-bottom: 15px;
    height: 3rem;
    border: none;
    color: #fff;
    border-radius: 6px;
    font-size: 20px;
    min-width: 150px;
    background: dodgerblue;
    font-family: "Lobster", cursive;
    :hover{
      cursor: pointer; 
    }
}
input{
    height: 1.4rem;
    margin-left: 5px;
    width: 50%;
    border-radius: 30px;
    caret-color: #C93C3C;
}
.mb-3{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;

}
`

