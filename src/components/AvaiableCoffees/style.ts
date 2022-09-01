import styled from "styled-components";

export const AvaiableCoffes = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  .keen-slider {
    max-width: 100%;
    padding: 0 1rem;
  }

  h2 {
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Baloo 2';
    font-size: 2rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  .keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide {
    min-height: unset;
    overflow: initial;
  }
`