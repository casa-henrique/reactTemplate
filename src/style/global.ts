import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --primary: #0E1237;
    --primary-dark: #00001E;
    --secondary-blue:#1B88EF;
    --secondary-lime:#24C07D ;
    --support:#53D5E9;
    
    --text-white:#FFFFFF;
    --text-black:#000000;
    --text-unpicked:#9E9E9E;
}

* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html {
    @media (max-width:1080px) {
        font-size: 93.75%; //15 pixels
    }
    @media (max-width:720px) {
        font-size: 87.5%; //14 pixels
    }
 }

 body { 
     -webkit-font-smoothing: antialiased;
 }

 button { 
     cursor: pointer;

     background-color: var(--primary);
     color: var(--text-white);
    
     border: none;
     border-radius: 0.2rem;
     padding: 0.8rem 2rem;

     font-family: "roboto";

     :hover{
        opacity: 0.8;
    }
 }

 h1 {
    font-family: 'Inter';
 }

 p {
    font-family: 'roboto';
 }

 ::-webkit-scrollbar-thumb {
  background-color: #CCCCCC;
  border-radius: 1rem;
}
::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
  }
::-webkit-scrollbar-thumb {
  background-color: #DFDFDF;
  border-radius: 1rem;
  }
`;
