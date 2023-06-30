import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;

  background-color: var(--text-white);

  margin-bottom: 5rem;

  .trailHeader {
    display: flex;

    height: 15%;
    width: 100%;

    justify-content: center;
    align-items: center;

    padding: 2rem 2rem;
    margin-bottom: 2rem;

    background-color: #eee;

    > h1 {
      color: var(--secondary-lime);
      font-family: "inter";
    }
  }

  .activityWrapper {
    display: flex;
    width: 98vw;
    overflow-x: auto;

    padding: 16px;
    gap: 1rem;
  }

  .activityItem,
  .activityItemSoon {
    display: flex;
    flex-direction: column;
    position: relative;

    height: 14rem;
    min-width: 12rem;
    max-width: 12rem;

    align-items: center;
    justify-content: space-between;

    background-color: var(--text-white);
    border-radius: 0.4rem;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 0.4rem;
      padding: 2px;
      background: linear-gradient(#1b88ef, #24c07d);
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    :hover {
      cursor: pointer;
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
    }

    > div {
      display: flex;
      background-color: #f3f3f3;

      align-items: center;
      justify-content: center;

      width: 100%;
      height: 50%;

      > img {
        width: 60%;
        height: 60%;
      }
    }

    > p {
      font-family: "inter";
      font-weight: bold;
      margin: 0 1rem;
      text-align: center;
    }
  }

  .activityItemSoon {
    justify-content: center;
  }

  .testItemSchool {
    height: 8rem;
  }

  .activityName {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
  }

  .activityTitle {
    font-size: 1.5rem;
    margin: 1rem 0 1rem 1rem;
    color: var(--secondary-blue);
    font-weight: bold;
  }

  .soon {
    margin: 1rem 0 1rem 1rem;
    font-family: "Inter";
  }
`;
