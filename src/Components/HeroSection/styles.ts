import styled from "styled-components";
import backgroundImage from "../../assets/images/background-Image-1.jpg";

export const Container = styled.main`
  display: flex;
  position: relative;
  z-index: 2;

  align-items: center;

  width: 100vw;
  height: 100%;

  background-size: cover;
  background-position: center center;
  background-image: url(${backgroundImage});

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(25, 87, 232, 0.25);
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 5;

  width: 40%;
  padding-left: 5rem;
  gap: 1rem;

  > h1 {
    color: var(--text-white);

    > span {
      color: var(--primary);
    }
  }

    .buttonsWrapper{
    display: flex;
    align-items:center;
    gap: 2rem;

    > a {
      width:35%;
    }

    > a > button {
      width:100%;
      height:100%;
      font-family:"Poppins";
      font-weight:bold;
    }
  }

  .backButton {
    background-color:transparent;
    border:2px solid var(--primary);
    color:var(--primary);
  }
`;
