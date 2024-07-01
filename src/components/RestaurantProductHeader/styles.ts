import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

interface HeaderProps {
  backgroundImage: string
}

export const HeaderRestaurant = styled.div<HeaderProps>`
  height: 280px;
  margin: 0 auto;
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
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
  min-width: 100%; /* Largura total */
  min-width: 300px;

  @media (max-width: 400px) {
    padding: 2em 0;
  }
`

export const DetailsHeader = styled.div`
  max-width: 1024px;
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
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    margin-top: -9.5em;
    flex-wrap: wrap; /* Permite que os elementos dentro do flex-container quebrem para uma nova linha */

    a {
      flex-basis: 30%; /* Faz com que o link ocupe toda a largura disponível quando quebrar para uma nova linha */
    }
  }

  @media (max-width: 400px) {
    font-size: 12px;
    margin-top: -13em;
  }
`
export const TitlePhoto = styled.div`
  max-width: 1024px;
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

    @media (max-width: 400px) {
      font-size: 25px;
      margin: 1em auto;
      padding: 0 1em;
    }
  }

  div h1 {
    font-size: 32px;
    font-weight: 900;

    @media (max-width: 400px) {
      font-size: 25px;
      margin: 1em auto;
      padding: 0 1em;
    }
  }
`
