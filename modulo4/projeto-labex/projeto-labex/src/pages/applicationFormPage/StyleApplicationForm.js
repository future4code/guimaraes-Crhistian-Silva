import styled from "styled-components";

export const StyleApplicationForm = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  align-items: center;
  width: 100vw;
    height: 100vh; 

.home-page{
    display: grid;
    justify-content: center;
    height: 20vh;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
    
}
.home-page, select, input{
    width: 50vh;
    height: 40px;
    margin-bottom: 5px;
    border-radius: 6px;
}


 h3{
    font-family: 'Lobster', cursive;
    font-size:4rem ;
    margin-top: 2rem;
    color: #fff;
}

.container-buttons-application-page{
    display: flex;    
    width: 30rem;
    display: flex;
    justify-content: space-around;
    margin-top: 15rem;
} 
button{
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
        :hover{
          cursor: pointer;
        }
    }
`




