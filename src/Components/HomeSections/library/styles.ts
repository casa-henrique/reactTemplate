import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;

width: 80%;
height: 100%;

padding: 1.5rem 0;
gap: 2rem;

.soon {
    display: flex;

    width: 90%;
    height: 60%;
    
    align-items: center;
    justify-content: center;

    > p {
        font-family: "Poppins";
        font-weight: light;
        color: #919191;
    }
}
`