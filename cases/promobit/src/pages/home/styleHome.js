import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    /* align-items: center; */
    margin: 1.875rem 7rem;

    gap: 2rem;

    @media (max-width: 720px) {
        justify-content: center;
        margin: 2rem 1rem;
        gap: 1rem;
    }
`
export const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    flex-direction: row;
    color: #5C16C5;
    list-style-type: none;
    margin-bottom: 10.688rem;

    padding: 10px;

    li {
        /* padding: 10 */
        border-radius: 20px;
        
        a {
            padding: 5px;
            margin: 0.5rem;
            cursor: pointer;
        }
    }
    
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: #5C16C5;
    color: white;
  }
`;