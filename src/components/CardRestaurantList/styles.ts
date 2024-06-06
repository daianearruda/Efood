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
  padding: 3em 10em;
  gap: 2em;
  background-color: ${colors.beige2};
  width: 1366px;
`
