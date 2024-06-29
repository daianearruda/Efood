import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-width: 300px;
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 800px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
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
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    grid-gap: 2.5em;
    margin: 0 1em;
  }
`
