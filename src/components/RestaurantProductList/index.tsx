import { useState } from 'react'
import Product from '../RestaurantProduct'
import Products from '../models/Products'

import {
  ContainerList,
  ProductList,
  Modal,
  ModalContent,
  Overlay
} from './styles'
import Button from '../Button'

import imgTest from '../../assets/images/imagePizzaProduto.png'
import fechar from '../../assets/images/close.png'

export type Props = {
  products: Products[]
}

const ProductListRestaurant = ({ products }: Props) => {
  const [selectProduct, setSelectProduct] = useState<Products | null>(null)

  const handleOpenModal = (product: Products) => {
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
            image={prod.image}
            title={prod.title}
            description={prod.description}
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
                <img src={imgTest} alt="" />
              </div>
              <div className="fechar" onClick={handleCloseModal}>
                <img src={fechar} alt="Fechar" />
              </div>

              <ModalContent>
                <h5>Pizza Marguerita</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia mollitia veniam deleniti magnam. Laboriosam vel nihil
                  error sapiente id libero porro unde neque eligendi deleniti?
                  Nesciunt, dignissimos. Enim, saepe quos!Lorem Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Ex corporis
                  deleniti officiis nulla tempore vel molestias. Repudiandae
                  illo, incidunt qui quia dicta beatae magnam aperiam? Unde
                  quisquam placeat magnam ducimus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Natus rerum cumque minima ipsum
                  consequatur error quo nisi iure at modi sit expedita maxime
                  deserunt, possimus ut, obcaecati ullam? Obcaecati, facere?
                </p>

                <p>Serve: de 2 a 3 pessoas</p>
                <Button
                  title="Adicionar ao carrinho"
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
