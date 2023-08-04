import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;

width: 80%;
height: 100%;

padding: 1.5rem 0;

 table {
    display: flex;
    flex-direction: column;

    width: 95%;
    height: 80%;

    margin-top: 2rem;
    border-radius: 8px;
    padding: 0 0 1rem 0;
    overflow: hidden;

    border: solid 1px rgba(85, 49, 255, 0.38);

    font-family: "poppins";

    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

    > thead {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 3rem;
        gap:0.2rem;
        background-color: var(--primary);
        color: white;

        > th {
            width: calc(100% /9);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 0.8rem;
            font-weight: 400;
        }
    }

    > tbody {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 90%;
        
        overflow: auto;

        > tr:nth-child(even) {
            background-color: var(--gray-test);
        }

        > tr {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap:0.3rem;
            height: 4rem;
            min-height: 4rem;

            > td {
                display: flex;

                align-items: center;
                justify-content: center;

                width: calc(100% /9);
                height: 100%;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-weight: 400;
                font-size: 0.9rem;
                color: var(--gray-600);

                
            :last-child {
                width: calc(100%/9 - 0.5rem);
            }
            }

            > td:hover {
                cursor: pointer;
            }
        }
    }
}

.borderLeft{
    border-left: 1px solid rgba(85, 49, 255, 0.38);
}
.cicleText {
    display: flex;
    align-self: center;
    font-weight: bold;
}
.teamInfo {
    width: 4.5rem;
    color: var(--primary);
}
.teamInfoText {
    color: white;
}
.soon {
    display: flex;

    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;

    font-family: "Poppins";
    font-weight: light;
    color: #919191;
}

.cicleHead {
    display: flex;
    justify-content: unset;

    > :first-child {
        width: 4.65rem ;
    }
}
.hiddenSpace {
width: 7.45rem;
}
`;

interface StatusProps {
    colorStatus: "Finalizado" | "Emandamento";
}

const colors = {
  Finalizado: "#24C07D",
  Emandamento: "#E98C00",
};

export const Status = styled.td<StatusProps>`
    color: ${(props) => colors[props.colorStatus]} !important;
`