import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1120px;
  padding-top: 94px;

  @media (max-width: 768px) { 
    padding-top: 15px;
    width: 100%;
  }
`

export const InfoContainer = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${props => props.theme["base-title"]};
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
    max-width: 588px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
  
  p {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    margin-top: 16px;
    max-width: 588px;
  }


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;

    img {
      width: 100%;
    }
  }
`

export const Benefits = styled.div`
  display: grid;
  gap: 20px 0;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 68px;


  @media (max-width: 768px) {
    margin: 30px 0;
  }

  span {
    color: ${props => props.theme["base-text"]};
  }

  div {
    align-items: center;
    display: flex;
  }
`

const baseIcons = styled.div`
  display: flex;
  border-radius: 50%;
  margin-right: 12px;
  padding: 8px;
`

export const ShoppingIcon = styled(baseIcons)`
  background-color: ${props => props.theme["yellow-dark"]};
`
export const PackageIcon = styled(baseIcons)`
  background-color: ${props => props.theme["base-text"]};
`
export const TimerIcon = styled(baseIcons)`
  background-color: ${props => props.theme["yellow"]};
`
export const CoffeeIcon = styled(baseIcons)`
  background-color: ${props => props.theme["purple"]};
`