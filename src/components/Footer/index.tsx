import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { FooterContainer, Link, Links, Text } from './styles'

const Footer = () => (
  <FooterContainer>
    <img className="logo" src={logo} alt="" />
    <Links>
      <li>
        <Link href="">
          <img src={instagram} alt="" />
        </Link>
      </li>
      <li>
        <Link href="">
          <img src={facebook} alt="" />
        </Link>
      </li>
      <li>
        <Link href="">
          <img src={twitter} alt="" />
        </Link>
      </li>
    </Links>
    <div>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.{' '}
      </Text>
    </div>
  </FooterContainer>
)

export default Footer
