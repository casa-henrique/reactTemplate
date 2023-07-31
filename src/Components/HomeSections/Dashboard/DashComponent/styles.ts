import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

width: calc(33% - 3rem);
height: 90%;

> p {
 font-family: "Poppins";
 font-size: 1.2rem;
 font-weight: bold;
 color: var(--secondary-blue);
 margin-bottom: 0.5rem;
}

.dashComponentWrapper {
    display: flex;
    flex-direction: column;
    
    max-height: 90%;
    overflow: auto;
}

.searchItem, .avaliationItem, .presentationItem {
display: flex;
padding: 1rem 0.4rem;

text-decoration:none;

align-items: center;
justify-content: space-between;

border-bottom: #E6E6E6 solid 1px;

:hover {
    cursor: pointer;
}

> p {
color: #636363;
font-family: "Poppins";
font-size: 0.8rem;
max-width: 120px;
height: 1rem;

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
}

.avaliationItem{
> div {
    display: flex;
    width: 55%;
    height: 0.8rem;
    background-color: #E6E6E6;
    border-radius: 1rem;
    overflow: hidden;
}

> div > div {
    background-color: #43FF6C;
    width: 50%;
}
}

.soon {
    margin:1rem 1rem;
    font-family: "Poppins";
    font-weight: light;
    color: #919191;
}
`