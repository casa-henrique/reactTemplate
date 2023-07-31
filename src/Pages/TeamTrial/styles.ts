import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 87vh;

  .trailHeader {
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 25%;
    padding: 2rem 2rem;

    align-items: center;

    background-color: var(--gray-test);
  }

  .buttonsWrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;

    > button {
      display: flex;
      background-color: transparent;
      padding: 0;
      color: var(--primary);

      > svg {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }

  .showIcon{
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;

    top: 1rem;
    left: 1rem;

    color: var(--primary);
    background-color: var(--gray-test);

    padding: 1rem;
    width: 4rem;
    height: 4rem;

    border-radius: 100%;

    > svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }

  .infoWrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    > div {
      > p, h2 {
        font-family: "Poppins";
        font-weight: bold;
      }

      > h2 {
        font-size: 1.5rem;
        color: var(--secondary-blue);
      }
      
      > p {
        font-size: 1rem;
        color: var(--primary);
      }
    }
  }

  .contentWrapper{
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    align-items: center;
  }

/* 
  .activityWrapper {
    display: flex;
    width: 98vw;
    overflow-x: auto;

    padding: 16px;
    gap: 1rem;
  } */

  .resultItem {
    justify-content: center !important;
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
