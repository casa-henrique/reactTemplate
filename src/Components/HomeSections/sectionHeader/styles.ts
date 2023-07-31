import styled from "styled-components";

export const Container = styled.div`

> p {
    display: flex;
    flex-direction: column;
    color: var(--primary);
    font-family: "Poppins";
    font-weight: bold;
    
    >span {
        font-family: "Poppins";
        font-weight: bold;
        color: var(--secondary-blue);
        font-size: 1.5rem;
    }
}
`