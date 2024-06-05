import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  color: ${colors.orange};
  width: 472px;
  height: 398px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  text-align: left;
  position: relative;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
export const Infos = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
`
