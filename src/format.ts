const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

/** "R$ 1.499,90" with a regular space instead of the NBSP Intl emits. */
export const formatPrice = (value: number) => brl.format(value).replace(/\s/g, ' ')
