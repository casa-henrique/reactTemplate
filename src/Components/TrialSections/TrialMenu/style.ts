import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin-top: 2rem;
gap: 3rem;

> button {
    display: flex;
    background-color: transparent;
    color: var(--gray-600);
    font-size: 1.1rem;
    font-family: 'Poppins';
    padding:0;  
    border-radius: 0;
}

.selected {
    color: var(--secondary-blue);
    border-bottom: 1px solid var(--secondary-blue);
}
`