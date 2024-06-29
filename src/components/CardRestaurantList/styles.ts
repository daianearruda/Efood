import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  margin: 0 auto;
  grid-gap: 2em 1em;
  padding-top: 4em;
  padding-bottom: 8em;

  @media (max-width: ${breakpoints.desktop}) {
    width: 92%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
