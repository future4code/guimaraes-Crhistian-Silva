import styled from "styled-components";

export const Container = styled.div`
    background: var(--purple);
    /* height: 28rem; */
`;
export const Content = styled.div`
    max-width: 1033px;
    margin: 0 auto;
    /* background: #fff; */
    text-align: center;
    padding: 5.3rem 0;

    h1 {
        font-size: 3rem;
        font-weight: bold;
        line-height: 3.5rem;
        
        color: var(--white);
    }

    p {
        font-size: 0.875rem;
        color: var(--white);
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 720px) {
        text-align: start;
        margin: 0 1rem 0;
    }
`;

export const GenreButton = styled.button`
    height: 2.5rem;
    padding: 0.5rem 1rem;
    
    margin-left: 0.70rem;
    margin-bottom: 0.75rem;
    border: 0;
    border-radius: 0.25rem;

    display: inline-flex;
    align-items: center;

    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    background-color: ${(props) => props.marked ? '#D18000' : '#fff'};
    color: ${(props) => props.marked ? '#FFFFFF': '#323232'};

    svg {
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 0.5rem;
    }
`;



