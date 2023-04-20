import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  .trailHeader {
    display: flex;

    height: 10%;
    width: 100%;

    align-items: center;
    justify-content: space-between;

    padding: 2rem 2rem;

    background-color: #eee;

    > h1 {
      color: var(--secondary-blue);
      font-family: "inter";
    }

    > div {
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 1.5rem;

      > p {
        max-width: 10rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  .activityWrapper {
    display: grid;
    grid-template-columns: auto auto auto auto auto;

    width: 100%;
    height: 90%;

    padding: 1rem;

    > div {
      display: flex;
      position: relative;
      width: 90%;
      height: 6rem;

      padding: 0.5rem;

      background-color: var(--secondary-blue);
      border-radius: 0.2rem;

      :hover {
        cursor: pointer;
      }
    }

    > div > p {
      color: var(--text-white);
      text-transform: uppercase;
    }
  }

  .activityName {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
  }

  .activityTitle {
    font-size: 1.5rem;
    margin: 1rem 0 1rem 1rem;
    color: var(--secondary-lime);
    font-weight: bold;
  }
`;
