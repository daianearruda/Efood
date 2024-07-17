import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import * as S from './styles'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <S.FooterContainer>
      <Link to="/" onClick={scrollToTop}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <S.Links>
        <li>
          <S.LinkFooter href="#">
            <img src={instagram} alt="instagram" />
          </S.LinkFooter>
        </li>
        <li>
          <S.LinkFooter href="#">
            <img src={facebook} alt="facebook" />
          </S.LinkFooter>
        </li>
        <li>
          <S.LinkFooter href="#">
            <img src={twitter} alt="twitter" />
          </S.LinkFooter>
        </li>
      </S.Links>
      <div>
        <S.Text>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade
          <br /> dos produtos é toda do estabelecimento contratado.
        </S.Text>
      </div>
    </S.FooterContainer>
  )
}

export default Footer
