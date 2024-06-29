import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.orange};
  max-width: 472px;
  height: 398px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 800px;
    max-width: 472px;
    height: 398px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 372px;
    min-height: 440px;
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
    width: 472px;
    height: 217px;
    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }

  Button {
    margin: 0.5em;
    margin-top: 1.5em;
    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 4em;
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    margin: 0 0.5em;
    align-items: center;
    padding-top: 1em;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 1em 0.5em;
  height: 88px;
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
  }
`
