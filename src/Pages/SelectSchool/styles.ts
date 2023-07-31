import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;

width:100vw;
height:100vh;

align-items: center;
justify-content: center;
gap: 2rem;

background-color:var(--primary);

> img {
    width: 40%;
}

> p {
    color: white;
    font-family: "Poppins";
}

> div {
    display: flex;
    gap: 1rem;

    > a {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        padding:3rem 0;
        gap: 1rem;
        
        width: 33%;
        background-color: var(--secondary-blue);
        color: white;
        text-decoration: none;
        
        border-radius: 6px;

        > p {
            font-family: "Poppins";
        }
        
        > img {
            width: 50%;
        }
    }
}
`