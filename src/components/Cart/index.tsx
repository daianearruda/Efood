import { useSelector, useDispatch } from 'react-redux'

import Button from '../Button'

import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useNavigate } from 'react-router-dom'
import { getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToDelivery = () => {
    navigate('/delivery')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>$ {item.preco.toFixed(2)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              Valor total <span>R$ {getTotalPrice(items)}</span>
            </S.Prices>
            <Button
              background="white"
              type="button"
              title="Continuar com a entrega"
              onClick={goToDelivery}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="emptyText">
            O carrinho está vazio, adicione um produto para continuar com a
            compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
