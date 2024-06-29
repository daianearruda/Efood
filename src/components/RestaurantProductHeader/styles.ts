import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

interface HeaderProps {
  backgroundImage: string
}

export const HeaderRestaurant = styled.div<HeaderProps>`
  min-width: 1024px;
  height: 280px;
  margin: 0 auto;
  position: relative;
  background-image: ${({ backgroundImage }) =>
    `url(${backgroundImage})`}; // Usar a propriedade no estilo
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -12em;
  padding: 2em;
  box-sizing: border-box;
  color: ${colors.orange};
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  text-align: center;
`

export const DetailsHeader = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -8.5em;
  box-sizing: border-box;
  z-index: 2;

  a {
    text-decoration: none;
    color: ${colors.orange};
    cursor: pointer;

    @media (max-width: ${breakpoints.desktop}) {
      margin-right: 4em;
    }
  }
`
export const TitlePhoto = styled.div`
  width: 1024px;
  margin: 2em auto;
  height: 380px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  text-align: start;
  color: ${colors.white};

  div h2 {
    font-size: 32px;
    font-weight: 100;
  }

  div h1 {
    font-size: 32px;
    font-weight: 900;
  }
`
