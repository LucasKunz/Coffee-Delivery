import styled from "styled-components"

export const FormContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px;
  max-width: 640px;
  padding: 40px;

  
  @media (max-width: 768px) {
    padding: 15px;
  }
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
export const FormLayout = styled.div`
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
outline-color: ${props => props.theme["yellow-dark"]};;
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