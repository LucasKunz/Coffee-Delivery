import styled from "styled-components"

export const CoffeeLayout = styled.div`
  align-items: center;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 54px;
  max-width: 256px;
  padding: 0 20px 20px;

  
  @media (max-width: 768px) {
      justify-content: flex-start;
      padding: 0 8px 20px
    }

  & > div {
    display: flex;
  }

  .coffee-type {
    @media (max-width: 768px) {
      gap: 0 10px;
    }
  }

  img {
    margin-top: -20px;
  }

  h1 {
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Baloo 2';
    font-size: 1.25rem;
  }

  p {
    color: ${props => props.theme["base-label"]};
    font-size: 0.875rem;
    margin-top: 5px;
    text-align: center;
  }
`

export const TypeCoffee = styled.span`
  background-color: ${props => props.theme["yellow-light"]};
  border-radius: 100px;
  color: ${props => props.theme["yellow-dark"]};
  font-size: .625rem;
  font-weight: bold;
  margin: 12px 5px 16px;
  padding: 8px;
  text-transform: uppercase;

  
  @media (max-width: 768px) {
    margin: 13px 0;
  }
`

export const PriceCoffe = styled.div`
  align-items: center;
  color: ${props => props.theme["base-text"]};
  display: flex;
  justify-content: space-around;
  margin-top: 33px;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 15px 0;
  }

  span {
    color: ${props => props.theme["base-text"]};
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    line-height: 0.8;
  }

  .price {
    align-items: flex-end;
    display: flex;
    font-size: 0.875rem;
    gap: 0 3px;

    
    @media (max-width: 768px) {
      display: block;
      text-align: center;
      width: 100%;
    }
  }

  .counter {
    align-items: center;
    background-color:  ${props => props.theme["base-button"]};
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    padding: 12px 8px;
    width: 72px;

    span {
      font-family: 'Roboto';
      font-size: 1rem;
    }
  }
`

export const ShoppingCartIcon = styled.div`
  background-color: ${props => props.theme["purple-dark"]};
  border-radius: 6px;
  padding: 8px;
`