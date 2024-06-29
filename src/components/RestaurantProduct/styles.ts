import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 620px;
    margin-bottom: 1em;
  }

  img {
    width: 304px;
    height: 167px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    @media (max-width: ${breakpoints.desktop}) {
      max-width: 284px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      min-width: 604px;
      height: 367px;
    }
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

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 284px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      min-width: 604px;
    }
  }

  .textContainer {
    margin: 0.5em;
  }
`
