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
      font-family: "Poppins";
      font-weight: bold;
      font-size: 0.8rem;

      :hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }

    > p {
      color:var(--text-white)
    }
  }
  .user {
    gap: 0.5rem !important;
    align-items: center;
    position: relative;

    > a > svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  .imagesWrapper {
    display: flex;
    gap: 1rem;

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

export const NotifyBox = styled.div`
    display: none;
    width: 7rem;
    height: 7rem;
    position: absolute;

    top: 1.5rem;
    left: -2.8rem;

    align-items: center;
    justify-content: center;

    background-color: #F8F8F8;
    border-radius: 6px;
    box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.25);

    > p {
      font-family: "Poppins";
        font-weight: light;
        color: #919191;
        font-size: 0.8rem;
    }

    :hover {
      display: flex;
    }
`;

export const NotifyBell = styled.a`
display: flex;

&:hover + ${NotifyBox} {
  display: flex;
}
`;
export const UserBox = styled.div`
    display: none;
    width: 7rem;
    height: 3rem;
    position: absolute;

    top: 1.4rem;
    right: -0.8rem;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: #F8F8F8;
    border-radius: 6px;
    box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.25);

    > p {
      font-family: "Poppins";
        font-weight: light;
        color: #919191;
        font-size: 0.8rem;
    }

    :hover {
      display: flex;
      > p {
        color: var(--red);
      }
    }
`;

export const UserTitle = styled.a`
display: flex;

&:hover + ${UserBox} {
  display: flex;
}
`;
