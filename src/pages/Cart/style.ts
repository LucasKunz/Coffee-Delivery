import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding-top: 94px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 20px;
  }
`
export const RequestContainer = styled.form`
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

export const PaymentContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 15px;
  }
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

  input[type='radio'] {
    opacity: 0;
    width: 0;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`

export const ButtonPayment = styled.label`
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

  &.active-payment {
    border: 1px solid ${props => props.theme["purple"]};
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }
`



export const OrderConfirmed = styled.div`
  display: flex;
  flex-direction: column;

  .order-confirmed {
    &__title {
      color: ${props => props.theme["yellow-dark"]};
      font-family: 'Baloo 2';
      font-size: 2rem;
    }

    &__description {
      color: ${props => props.theme["base-title"]};
      font-size: 1.25rem;
      margin: 4px 0 40px
    }
  }
`

export const OrderInformations = styled.div`
  background: 
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(to right, #DBAC2C, #8047F8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 32px 0;
  padding: 40px;
  width: 526px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
  }
`

export const InformationItem = styled.div `
  display: flex;
`

const baseIcons = styled.div`
  border-radius: 50%;
  display: flex;
  height: 32px;
  margin-right: 12px;
  padding: 8px;
  width: 32px;
`

export const LocationIcon = styled(baseIcons)`
  background-color: ${props => props.theme.purple};
`

export const TimerIcon = styled(baseIcons)`
  background-color: ${props => props.theme.yellow};
`
export const MoneyIcon = styled(baseIcons)`
  background-color: ${props => props.theme["yellow-dark"]};
`

