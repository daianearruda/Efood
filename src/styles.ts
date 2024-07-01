import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

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
   width: 100vw;
  height:100vh;
}

.container{
  width: 100%;
  margin: 0 auto;
}
`
