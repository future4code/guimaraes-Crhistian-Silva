import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #E7E7E7;

        --white: #FFFFFF;
        --black: #000000;

        --gray: #646464;
        --gray-700: #323232;

        --purple: #2D0C5E;
        --light-purple: #5C16C5;

        --yellow: #D18000;
    }

    ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
    ::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        color: var(--white);
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
        
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;