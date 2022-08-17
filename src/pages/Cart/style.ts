import styled from "styled-components";

export const CartContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding-top: 94px;
  width: 100%;
`

export const RequestContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  width: 100%;

  .form-title {
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
  }
`

export const FormContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px;
  max-width: 640px;
  padding: 40px;
`

export const AddressDelivery = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 0 8px;

  div {
    display: flex;
    flex-direction: column;
  }

  .title {
    color: ${props => props.theme["base-subtitle"]};
  }

  .description {
    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
  }
`
export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  margin-top: 32px;

  div {
    display: flex;
    gap: 0 12px;
  }
`

const BaseInputForm = styled.input`
  background-color: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;
  color: ${props => props.theme["base-label"]};
  font-size: 0.875rem;
  padding: 12px;
`

export const CodeInput = styled(BaseInputForm)`
  max-width: 200px;
  width: 100%;
`

export const StreetInput = styled(BaseInputForm)`
  max-width: 100%;
  width: 100%;
`

export const NumberInput = styled(BaseInputForm)`
  max-width: 200px;
  width: 100%;
`

export const ComplementInput = styled(BaseInputForm)`
  max-width: 348px;
  width: 100%;
`

export const DistrictInput = styled(BaseInputForm)`
  max-width: 200px;
  width: 100%;
`

export const CityInput = styled(BaseInputForm)`
  max-width: 276px;
  width: 100%;
`

export const StateInput = styled(BaseInputForm)`
  max-width: 60px;
  width: 100%;
`

export const PaymentContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  padding: 40px;
`
export const PaymentInfo = styled.div`
  display: flex;
  gap: 0 8px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  .payment-title {
    color: ${props => props.theme["base-subtitle"]};
  }

  .payment-description {
    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0 12px;
  margin-top: 32px;
`

export const ButtonPayment = styled.button`
  align-items: center;
  background-color: ${props => props.theme["base-button"]};
  border: 1px solid transparent;
  border-radius: 6px;
  color: ${props => props.theme["base-text"]};
  display: flex;
  gap: 0 12px;
  justify-content: flex-start;
  font-size: .75rem;
  max-width: 178px;
  padding: 16px;
  text-transform: uppercase;
  width: 100%;

  &:active {
    border: 1px solid ${props => props.theme["purple"]};
  }
`


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
`