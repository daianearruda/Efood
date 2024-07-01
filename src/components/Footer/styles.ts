import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  min-width: 100%; /* Largura total */
  min-width: 300px;
  height: 298px;
  background-color: ${colors.beige};
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;

  .logo {
    margin: 3em;
    width: 125px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-bottom: 4em;
  width: 88px;
  justify-content: space-between;
  align-items: center;
`

export const LinkFooter = styled.a`
  width: 24px;
  height: 24px;
`
export const Text = styled.p`
  color: ${colors.orange};
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
`
