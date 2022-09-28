import styled from "styled-components"
import fundoError from "../../assets/movies.jpg"
 
export const StyledError = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Boogaloo&family=Paytone+One&display=swap');
background-image: url(${fundoError});
height: 100vh;
justify-content: center;
align-items: center;
display: flex;


div{
width: 40rem;
height: 20rem;
display: flex;
align-items: center;
justify-content: center;

}

h1 {
    color: #fff;
    background-color: blue;
    font-family: 'Boogaloo', cursive;
    font-family: 'Paytone One', sans-serif;
    padding: 2rem;
    border-radius: 10px 20px;
  }
`


