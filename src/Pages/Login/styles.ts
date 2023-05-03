import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  align-items: center;

  .leftSection {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 45%;
    height: 100%;

    padding: 0 5rem;

    background-color: #e9e9e9;
  }

  .imagesWrapper {
    display: flex;
    gap: 1rem;

    > img {
      align-self: flex-start;
      height: 2.5rem;
      margin-bottom: 3.5rem;
      aspect-ratio: 3/2;
      object-fit: contain;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2rem;

    > h1 {
      color: #262626;
      font-size: 2.5rem;
    }
    > p {
      color: #666666;
    }
  }

  .rightSection {
    display: flex;

    width: 55%;
    height: 100%;
    background-color: var(--primary);

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      opacity: 0.7;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  > input {
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 0.5rem;
  }

  > button {
    width: 90%;
  }
`;
