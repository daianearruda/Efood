import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import imgBackgroundHeader from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  padding: 2em;
  color: ${colors.orange};
  text-align: center;
  align-items: center;
  position: relative;
  height: 384px;
  min-width: 300px;
  background-image: url('${imgBackgroundHeader}');
  background-size: cover; /* Garante que a imagem cubra todo o contêiner */
  background-position: center;

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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    width: 350px;
    margin-bottom: 2em;
  }
`
