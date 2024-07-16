import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContainer, Overlay } from '../../components/Cart/styles'

import { CustomSidebar, DivInputs, Row } from './styles' // Importando os estilos customizados
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'

const Delivery = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(open())
    navigate('/cart')
  }

  return (
    <CartContainer className="is-open">
      <Overlay onClick={closeCart} />
      <CustomSidebar>
        <h2>Entrega</h2>
        <form>
          <DivInputs>
            <label htmlFor="name">Quem irá receber</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </DivInputs>
          <DivInputs>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </DivInputs>
          <DivInputs>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </DivInputs>
          <Row>
            <DivInputs maxWidth="46%">
              <label htmlFor="postalCode">CEP</label>
              <input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </DivInputs>
            <DivInputs maxWidth="46%">
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </DivInputs>
          </Row>
          <DivInputs>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />
          </DivInputs>

          <Button background="white" type="button" title="Enviar Endereço">
            Continuar com o pagamento
          </Button>
          <Button
            background="white"
            type="button"
            title="Voltar para o carrinho"
            onClick={closeCart}
          >
            Voltar para o carrinho
          </Button>
        </form>
      </CustomSidebar>
    </CartContainer>
  )
}

export default Delivery
