import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerList = styled.section`
  top: 498px;
  left: 171px;
  background-color: ${colors.beige2};
`
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  margin: 0 auto;
  padding-top: 4em;
  padding-bottom: 8em;
  width: 1024px;
`
