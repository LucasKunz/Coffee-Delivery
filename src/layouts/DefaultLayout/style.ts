import styled from "styled-components"

export const LayoutContainer = styled.div`
  background-color: ${props => props.theme["background"]};
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`