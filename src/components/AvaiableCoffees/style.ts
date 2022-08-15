import styled from "styled-components";

export const AvaiableCoffes = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  h2 {
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Baloo 2';
    font-size: 2rem;
  }
`