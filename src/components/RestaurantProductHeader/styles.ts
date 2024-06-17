import styled from 'styled-components'
import imgLaDolce from '../../assets/images/apresentacaoLaDolce.png'
import { colors } from '../../styles'

export const HeaderRestaurant = styled.div`
height: 280px;
margin:0 auto;
position: relative;
background-image: url(${imgLaDolce});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
margin-top: -12em;
padding: 2em;
box-sizing: border-box;
color: ${colors.orange};
font-size: 18px;
font-weight: 900;
line-height: 21.09px;
text-align: center;


  }
`
export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8.5em;
  margin-top: -8.5em;
  box-sizing: border-box;
  z-index: 2;

  a {
    text-decoration: none;
    color: ${colors.orange};
  }
`
export const TitlePhoto = styled.div`
  height: 380px;
  margin-left: 8.5em;
  margin-top: 3em;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  text-align: start;
  color: ${colors.white};

  div h2 {
    font-size: 32px;
    font-weight: 100;
  }

  div h1 {
    font-size: 32px;
    font-weight: 900;
  }
`
