import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerList = styled.section`
  min-width: 1024px;
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
  max-width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    gap: 1em;
    width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 1;
`

export const Modal = styled.div`
  width: 1024px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  overflow-y: auto;
  background-color: ${colors.orange};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
  }

  .container {
    padding: 2em;
    display: flex;
    position: relative;
  }

  .imgTest {
    img {
      width: 280px;
      height: 280px;
    }
  }

  .fechar {
    cursor: pointer;
    padding: 0.5em;
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const ModalContent = styled.div`
  padding: 0 1em;
  color: ${colors.beige2};

  h5 {
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 1em;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 1em;
    line-height: 22px;
  }

  Button {
    width: 218px;
    height: 24px;
  }
`
