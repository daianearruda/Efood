import { useState } from 'react'
import Product from '../RestaurantProduct'

import * as S from './styles'
import Button from '../Button'

import fechar from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

export type Props = {
  products: Cardapio[]
}

const ProductListRestaurant = ({ products }: Props) => {
  const dispatch = useDispatch()

  const [selectProduct, setSelectProduct] = useState<Cardapio | null>(null)

  const addToCart = () => {
    if (selectProduct) {
      dispatch(add(selectProduct))
      dispatch(open())
      handleCloseModal()
    }
  }

  const handleOpenModal = (product: Cardapio) => {
    setSelectProduct(product)
  }

  const handleCloseModal = () => {
    setSelectProduct(null)
  }

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleCloseModal()
    }
  }

  return (
    <S.ContainerList className="container">
      <S.ProductList>
        {products.map((prod) => (
          <Product
            id={prod.id}
            image={prod.foto}
            title={prod.nome}
            description={prod.descricao}
            key={prod.id}
            openModal={() => handleOpenModal(prod)}
          />
        ))}
      </S.ProductList>

      {selectProduct && (
        <>
          <S.Overlay onClick={handleOverlayClick} />
          <S.Modal onClick={handleOverlayClick}>
            <div className="container" onClick={(e) => e.stopPropagation()}>
              <div className="imgTest">
                <img src={selectProduct.foto} alt="" />
              </div>
              <div className="fechar" onClick={handleCloseModal}>
                <img src={fechar} alt="Fechar" />
              </div>

              <S.ModalContent>
                <h5>{selectProduct.nome}</h5>
                <p>{selectProduct.descricao}</p>

                <p>Serve: {selectProduct.porcao}</p>
                <Button
                  title={`Adicionar ao carrinho R$${selectProduct.preco.toFixed(
                    2
                  )}`}
                  background="white"
                  type="button"
                  onClick={addToCart}
                >
                  {`Adicionar ao carrinho R$ ${selectProduct.preco.toFixed(2)}`}
                </Button>
              </S.ModalContent>
            </div>
          </S.Modal>
        </>
      )}
    </S.ContainerList>
  )
}

export default ProductListRestaurant
