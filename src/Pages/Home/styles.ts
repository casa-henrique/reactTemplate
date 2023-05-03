import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 2rem;

  width: 100%;
  height: calc(100vh - 13vh);

  > h2 {
    font-family: "Inter";
    color: var(--secondary-lime);
    margin-top: 2rem;

    > span {
      text-transform: capitalize;
    }
  }
`;
