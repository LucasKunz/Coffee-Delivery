import styled from "styled-components";


export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 104px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 10rem;
  width: 100%;
`

export const Actions = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.875rem;
  justify-content: center;
  gap: 0.75rem;
  width: auto;
`

const baseActions = styled.div`
  align-items: center;
  border-radius: 6px;
  display: flex;
  height: 38px;
  padding: 0.5rem;
`

export const LocationIcon = styled(baseActions)`
  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};
`

export const CartIcon = styled(baseActions)`
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
  position: relative;

  span {
    align-items: center;
    background-color: ${props => props.theme["yellow-dark"]};
    border-radius: 50%;
    color: ${props => props.theme["white"]};
    display: flex;
    font-size: 0.75rem;
    font-weight: 800;
    height: 20px;
    justify-content: center;
    position: absolute;
    right: -8px;
    top: -8px;
    width: 20px;
  }
`

