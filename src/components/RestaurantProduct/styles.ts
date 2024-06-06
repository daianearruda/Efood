import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductCard = styled.div`
  align-items: center;
  max-width: 320px;
  background-color: ${colors.orange};
  color: ${colors.beige};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-aling: start;

  img {
    width: 304px;
    height: 167px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    line-height: 18.75px;
    text-align: left;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  Button {
    width: 304px;
    margin-bottom: 0.5em;
  }

  .textContainer {
    margin: 0.5em;
  }
`
