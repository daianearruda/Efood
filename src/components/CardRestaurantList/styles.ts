import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Centraliza horizontalmente o Container */
  width: 100%; /* Garante que o Container ocupe toda a largura disponível */
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  gap: 2em;
  padding-top: 4em;
  padding-bottom: 8em;
`
