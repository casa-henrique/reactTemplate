import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: calc(100vh - 13vh);

  > h2 {
    font-family: "Inter";
    color: var(--secondary-lime);
  }
`;
