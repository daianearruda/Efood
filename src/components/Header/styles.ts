import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  height: 380px;
  width: 100%;
  padding: 2em;
  color: ${colors.orange};
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    img {
      width: 125px;
    }
  }
`
export const Title = styled.h3`
  font-size: 36px;
  line-height: 42.19px;
  font-weight: 900;
  width: 539px;
  height: 84px;
  top: 236px;
  left: 414px;
  gap: 0px;
  opacity: 0px;
`
