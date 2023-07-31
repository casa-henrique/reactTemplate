import styled from "styled-components";

export const Container = styled.nav`
display: flex;
flex-direction: column;
gap: 1rem;

height: 80%;
width: 20%;

align-items: center;
justify-content: center;

border-right: 1px solid rgba(85, 49, 255, 0.38);

> button {
    background-color: transparent;
    color: var(--primary);
    font-family: "Poppins";
    font-size: 1.2rem;
    font-weight: bold;
}

.selected {
    color: var(--secondary-blue);
}

`