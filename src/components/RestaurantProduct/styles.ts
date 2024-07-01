import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ProductCard = styled.div`
  min-width: 240px;
  align-items: center;
  max-width: 100%;
  background-color: ${colors.orange};
  color: ${colors.beige};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  padding: 1em;
  margin: 0 auto;

  img {
    width: 100%;
    min-height: 258px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    max-height: 304px;

    @media (max-width: ${breakpoints.desktop}) {
      min-width: 280px; /* Reduz a largura máxima da imagem em telas menores */
      height: 280px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 98%;
    }

    @media (max-width: 370px) {
      min-width: 78%;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    line-height: 18.75px;
    text-align: left;
    margin-top: 0.5em; /* Adiciona margem no topo */
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 0.5em; /* Adiciona margem na parte inferior */
  }

  Button {
    width: 100%;
    min-width: 250px; /* Largura máxima do botão */
    margin-bottom: 0.5em;
  }

  .textContainer {
    margin: 0.5em 0;
  }
`
