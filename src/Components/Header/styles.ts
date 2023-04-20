import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--primary);
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1120px;
  height: 13vh;

  margin: 0 auto;

  > p {
    color: var(--text-white);
  }

  .navigation {
    display: flex;
    gap: 2rem;

    > a {
      color: var(--text-white);
      text-decoration: none;
      font-family: "Roboto";
      font-weight: bold;

      :hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }

  .imagesWrapper {
    display: flex;

    > img {
      aspect-ratio: 4/2;
      height: 3.5rem;
      object-fit: contain;
    }
  }

  > button {
    background-color: var(--secondary-blue);
    padding: 0.7rem 3rem;
  }
`;
