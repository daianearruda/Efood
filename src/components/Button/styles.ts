import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button<Props>`
  width: 82px;
  height: 24px;
  background-color: ${(props) =>
    props.background === 'orange' ? colors.orange : colors.beige};
  color: ${(props) =>
    props.background === 'orange' ? colors.beige : colors.orange};
  border: none;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  width: 70px;
  height: 16px;
  cursor: pointer;
`
