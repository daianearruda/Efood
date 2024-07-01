import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerList = styled.section`
  margin: 0 auto;
  background-color: ${colors.beige2};
  padding: 1em;
  min-width: 100%; /* Largura total */
  min-width: 400px;
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  margin: 0 auto;
  padding-top: 4em;
  padding-bottom: 8em;
  max-width: 1024px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    padding: 1em; /* Ajusta o padding para não ultrapassar a largura máxima */
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr; /* Uma coluna em telas menores que tablet */
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

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }

  .imgTest {
    img {
      width: 280px;
      height: 280px;
      @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        height: 100%;
      }
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
