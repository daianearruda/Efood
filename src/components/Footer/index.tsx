import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { FooterContainer, LinkFooter, Links, Text } from './styles'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <FooterContainer>
      <Link to="/" onClick={scrollToTop}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Links>
        <li>
          <LinkFooter href="#">
            <img src={instagram} alt="instagram" />
          </LinkFooter>
        </li>
        <li>
          <LinkFooter href="#">
            <img src={facebook} alt="facebook" />
          </LinkFooter>
        </li>
        <li>
          <LinkFooter href="#">
            <img src={twitter} alt="twitter" />
          </LinkFooter>
        </li>
      </Links>
      <div>
        <Text>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade
          <br /> dos produtos é toda do estabelecimento contratado.
        </Text>
      </div>
    </FooterContainer>
  )
}

export default Footer
