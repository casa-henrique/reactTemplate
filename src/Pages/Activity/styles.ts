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
    top: 1.1rem;
    right: 2rem;

    background-color: transparent;
    color: var(--text-unpicked);

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }


  .hideHeader {
    top: 3rem;
    right: 1rem;
    background-color: var(--text-white);
    border-radius: 100%;
    padding: 0.8rem;
    z-index: 100;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .activityHeader {
    display: flex;
    position: relative;
    width: 100%;
    height: 15%;

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

`;

export const PdfView = styled.iframe`
  height: 100%;
  width: 100%;

  border: none;

  .toolbar {
    background-color: red !important;
  }
`
