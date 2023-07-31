import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;

width: auto;
height: 100%;

align-items: center;

margin-top: 2rem;
padding: 1rem;
overflow: auto;

> h2 {
    align-self: baseline;
    width: 73vw;
    margin: 0 2rem 1rem 1rem;

    font-family: "Poppins";
    font-size: 1.2rem;
    color: var(--secondary-blue);
    
    border-bottom:1px solid var(--stroke);
}

.trialItemsWrapper{
    display: flex;
    gap: 1rem;
    padding: 0.2rem;
    margin-bottom: 3rem;
    align-self: baseline;

    width: 72vw;
    min-height: 200px;

    overflow-x: scroll;
    overflow-y: hidden;
}
`;