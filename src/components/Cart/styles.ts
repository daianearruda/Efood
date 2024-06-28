import styled from 'styled-components'
import { colors } from '../../styles'

import close from '../../assets/images/lixeira.png'
import { ButtonContainer } from '../Button/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
  display: none;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${colors.orange};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    height: 24px;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.beige};
  color: ${colors.orange};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    margin-top: 1em;
    display: block;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 14px;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-weight: 700;
  font-sixe: 14px;
  color: ${colors.beige2};
  margin-top: 32px;
  margin-bottom: 16px;
`
