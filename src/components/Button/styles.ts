import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button<Props>`
  width: 70px;
  height: 16px;
  background-color: ${(props) =>
    props.background === 'orange' ? colors.orange : colors.beige};
`
export const ButtonLink = styled(Link)`
  width: 70px;
  height: 16px;
`
