import styled from 'styled-components'
import imgLaDolce from '../../assets/images/apresentacaoLaDolce.png'
import { colors } from '../../styles'

export const HeaderRestaurant = styled.div`
width: 1366px;
height: 280px;
margin:0 auto;
position: relative;
background-image: url(${imgLaDolce});
background-size: cover;
background-position: center;
margin-top: -240px;
padding: 2em;
box-sizing: border-box;
color: ${colors.orange};

  }
`
export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between; /* Altera para space-between */
  align-items: center;
  width: 100%;
  max-width: 1366px; /* Define a largura máxima */
  padding: 0 8.5em; /* Adiciona padding para espaçamento nas extremidades */
  margin-top: -120px;
  box-sizing: border-box;
  z-index: 2;

  a {
    text-decoration: none;
    color: ${colors.orange};
  }
`
