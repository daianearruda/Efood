import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  padding: 3em 6em;
  gap: 3em;
  background-color: ${colors.beige2};
  min-width: 1199px;
`
