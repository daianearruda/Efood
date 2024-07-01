import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-width: 100%; /* Largura total */
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
  grid-gap: 4em;
  padding-top: 4em;
  padding-bottom: 8em;
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 400px) {
    max-width: 80%;
  }
`
