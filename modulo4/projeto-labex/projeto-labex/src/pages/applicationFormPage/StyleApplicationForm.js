import styled from "styled-components";

export const StyleApplicationForm = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
  justify-content: center;
  h1{
    margin-top: 2rem;
    font-size: 4rem;
    font-family: "Lobster", cursive;
  }

.form-application-page{
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
select,
  input {
    width: 50vh;
    height: 40px;
    margin-bottom: 5px;
    border-radius: 6px;
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
    margin-top: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
`;
