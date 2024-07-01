import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.orange};
  max-width: 472px;
  height: auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 800px;
    max-width: 472px;
    height: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 372px;
    min-height: auto;
  }

  @media (max-width: 400px) {
    max-width: 100%; /* Certifique-se de que o card ocupe a largura total */
    margin: 0 auto; /* Centralize o card */
    min-height: auto;
  }

  opacity: 0px;
  text-align: left;
  position: relative;

  .border {
    border: 1px solid ${colors.orange};
    border-top: none;
    margin-top: -0.5em;
  }

  .photoFood {
    width: 100%;
    height: 217px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }

  Button {
    margin: 0.5em;
    margin-top: 1.5em;

    @media (max-width: ${breakpoints.desktop}) {
      margin-top: 1em;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 0.5em;
    }

    @media (max-width: 400px) {
      margin-top: 0.5em;
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    margin: 0 0.5em;
    align-items: center;
    padding-top: 1em;

    @media (max-width: 400px) {
      flex-direction: row;
    }
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;

  @media (max-width: 400px) {
    padding-top: 1em;
    font-size: 16px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 1em 0.5em;
  word-wrap: break-word;
  white-space: normal;
`

export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  text-align: center;
  align-items: center;

  img {
    width: 21px;
    height: 21px;
    margin-left: 4px;

    @media (max-width: 400px) {
      width: 15px;
      height: 15px;
    }
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`
