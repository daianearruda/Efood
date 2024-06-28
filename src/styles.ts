import { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E66767',
  beige: '#FFEBD9',
  white: '#fff',
  beige2: '#FFF8F2',
  black: '#000'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  width: 100%;
  height:100%;
}

.container{
  width: 100%;
  margin: 0 auto;
}
`
