import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100vw;
  height: 100vh;

  align-items: center;

  .showHeader,
  .hideHeader {
    position: absolute;
    top: 0.5rem;
    right: 2rem;

    background-color: transparent;
    color: var(--text-unpicked);

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .hideHeader {
    background-color: var(--text-white);
    border-radius: 100%;
    padding: 0.8rem;
  }

  .activityHeader {
    display: flex;
    position: relative;
    width: 100%;
    height: 10%;

    background-color: var(--primary);

    padding: 0 1rem;

    justify-content: center;
    align-items: center;

    > button {
      position: absolute;
      left: 1rem;
      background-color: transparent;
      color: var(--text-unpicked);
    }

    > button > svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    > p {
      text-transform: capitalize;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--text-white);
    }
  }

  .iframeTest {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 90%;

    align-items: center;
    justify-content: center;

    > iframe {
      width: 95%;
      height: 95%;
      border: none;
    }
  }
`;