import { useState } from 'react'
import Product from '../RestaurantProduct'

import {
  ContainerList,
  ProductList,
  Modal,
  ModalContent,
  Overlay
} from './styles'
import Button from '../Button'

import fechar from '../../assets/images/close.png'
import { Cardapio } from '../../pages/RestaurantPage'

export type Props = {
  products: Cardapio[]
}

const ProductListRestaurant = ({ products }: Props) => {
  if (!products) {
    products = [] // Define como um array vazio se products for undefined
  }
  const [selectProduct, setSelectProduct] = useState<Cardapio | null>(null)

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
    <ContainerList className="container">
      <ProductList>
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
      </ProductList>

      {selectProduct && (
        <>
          <Overlay onClick={handleOverlayClick} />
          <Modal onClick={handleOverlayClick}>
            <div className="container" onClick={(e) => e.stopPropagation()}>
              <div className="imgTest">
                <img src={selectProduct.foto} alt="" />
              </div>
              <div className="fechar" onClick={handleCloseModal}>
                <img src={fechar} alt="Fechar" />
              </div>

              <ModalContent>
                <h5>{selectProduct.nome}</h5>
                <p>{selectProduct.descricao}</p>

                <p>Serve: {selectProduct.porcao}</p>
                <Button
                  title={`Adicionar ao carrinho R$${selectProduct.preco.toFixed(
                    2
                  )}`}
                  background="white"
                  type="button"
                >
                  Adicionar ao carrinho
                </Button>
              </ModalContent>
            </div>
          </Modal>
        </>
      )}
    </ContainerList>
  )
}

export default ProductListRestaurant
