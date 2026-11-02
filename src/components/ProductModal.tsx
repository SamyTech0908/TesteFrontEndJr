import { useEffect, useState } from 'react'
import { assets } from '../assets'
import { formatPrice } from '../format'
import type { Product } from '../types'

interface Props {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  const [qty, setQty] = useState(1)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={product.productName}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" aria-label="Fechar" onClick={onClose} />
        <div className="modal__photo">
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className="modal__info">
          <div className="modal__head">
            <h2>{product.productName}</h2>
            <p className="modal__price">{formatPrice(product.price)}</p>
          </div>
          <div className="modal__desc">
            <p>{product.descriptionShort}</p>
            <a href="#">Veja mais detalhes do produto &gt;</a>
          </div>
          <div className="modal__actions">
            <div className="modal__qty">
              <button aria-label="Diminuir" disabled={qty <= 1} onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <img src={assets.minus} alt="" />
              </button>
              <span>{String(qty).padStart(2, '0')}</span>
              <button aria-label="Aumentar" onClick={() => setQty((q) => q + 1)}>
                <img src={assets.plus} alt="" />
              </button>
            </div>
            <button className="modal__buy" onClick={onClose}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
