import { formatPrice } from '../format'
import type { Product } from '../types'

interface Props {
  product: Product
  onSelect: (product: Product) => void
}

export default function ProductCard({ product, onSelect }: Props) {
  return (
    <article className="card" onClick={() => onSelect(product)}>
      <div className="card__photo">
        <img src={product.photo} alt={product.productName} />
      </div>
      <p className="card__desc">{product.descriptionShort}</p>
      <p className="card__price">{formatPrice(product.price)}</p>
      <p className="card__installment">ou 2x de {formatPrice(product.price / 2)} sem juros</p>
      <p className="card__shipping">Frete grátis</p>
      <button
        className="card__buy"
        onClick={(e) => {
          e.stopPropagation()
          onSelect(product)
        }}
      >
        Comprar
      </button>
    </article>
  )
}
