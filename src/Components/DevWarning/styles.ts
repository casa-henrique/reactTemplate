import styled from "styled-components";

export const Warning = styled.div`
display: flex;
position: absolute;
top: 0;

gap: 2rem;

align-items: center;
justify-content: center;

width: 100%;
height: 3.5rem;
background-color: var(--secondary-blue);
color: var(--text-white);

> p > a {
color: var(--text-white);
}

> button {
  padding: 0.3rem 1rem;
}
`

export const Reopen = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  padding: 0;
  
  color: var(--text-white);
  background-color: transparent;
    
  > svg {
    width: 1rem;
    height: 1rem;
  }
`;