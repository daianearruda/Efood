import styled from 'styled-components'

import { colors } from '../../styles'

interface ButtonContainerProps {
  background: 'orange' | 'white'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
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
export const ButtonLink = styled.a`
  width: 70px;
  height: 16px;
  cursor: pointer;
`
