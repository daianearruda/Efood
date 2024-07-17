export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((total, item) => total + item.preco, 0).toFixed(2)
}
