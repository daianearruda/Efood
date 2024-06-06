import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerList = styled.section`
  height: 800px;
  top: 498px;
  left: 171px;
  background-color: ${colors.beige};
`
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  margin: 0 auto;
  padding-top: 3em;
  padding-bottom: 5em;
  width: 1024px;
  height: 708px;
`
