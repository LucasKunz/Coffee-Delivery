import styled from "styled-components"

export const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  max-width: 448px;
  width: 100%;

  .checkout-title {
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
  }

  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`

export const CheckoutLayout = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 44px;
  padding: 40px;
`

export const AddedCoffees = styled.div`
  max-height: 380px;
  overflow: auto;
`

export const CoffeeCart = styled.div`
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 0 20px;
    padding-bottom: 32px;

    p {
      display: block;
    }

    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  & + div {
    margin-top: 32px;
  }

  img {
    max-width: 64px;
  }

  span {
    color: ${props => props.theme["base-text"]};
    display: flex;
    font-weight: 700;
    gap: 0 5px;
  }

  
  @media (max-width: 768px) {
   align-items: center;
  }

`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    align-items: center;
    display: flex;
    gap: 0 8px;
    margin-top: 8px;
  }

  p {
    color: ${props => props.theme["base-subtitle"]}
  }

  .counter {
    align-items: center;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    height: 32px;
    padding: 8px;
    width: 72px;

    span {
      font-family: 'Roboto';
      font-size: 1rem;
    }
  }

  button {
    align-items: center;
    background-color: ${props => props.theme["base-button"]};
    border: 0;
    border-radius: 6px;
    color: ${props => props.theme["base-text"]};
    display: flex;
    font-size: 0.75rem;
    gap: 0 4px;
    height: 32px;
    justify-content: space-between;
    text-transform: uppercase;
    padding: 0 8px;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  margin-top: 32px;

  div {
    display: flex;
    justify-content: space-between;
  }

  .order-description {
    color: ${props => props.theme["base-text"]};
    font-size: .875rem;
  }

  .order-price {
    color: ${props => props.theme["base-text"]};
  }

  .order-total {
    color: ${props => props.theme["base-subtitle"]};
    font-weight: 700;
    font-size: 1.25rem;
  }

  button {
    background-color: ${props => props.theme["yellow"]};
    border: 0;
    border-radius: 6px;
    color: ${props => props.theme["white"]};
    font-size: .875rem;
    font-weight: 700;
    height: 46px;
    padding: 12px 8px;
    margin-top: 24px;
    text-transform: uppercase;
  }

  .messageError {
    color: ${props => props.theme["yellow-dark"]};;
    font-size: .875rem;
    text-align: center;
  }
`