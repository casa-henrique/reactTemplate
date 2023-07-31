import styled from "styled-components";

export const Container = styled.a`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;

gap: 1rem;
border-radius: 8px;
background-color: var(--gray-test);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

max-width: 200px;
min-width: 200px;
height: 90%;

text-decoration: none;
cursor: pointer;

> h3 {
    font-family: "Poppins";
    color: var(--primary);
    text-transform: capitalize;
    text-align: center;
    font-size: 1rem;
    width: 90%;
}

> button {
    font-family: "Poppins";
    font-weight: bold;
    color: #24C07D;
    background-color: #C8FFE7;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.7rem;
}

> p {
    color: #B9B9B9;
    font-family: "Poppins";
    font-weight: bold;
    font-size: 0.8rem;
}
`;