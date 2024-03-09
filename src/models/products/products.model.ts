import { type IProducts } from 'src/interfaces/IProducts'

export const products: IProducts[] = [
  {
    sku: 'WU123',
    name: '1kG Tomato',
    description: 'This is a great tomato',
    unit_price: 2000,
    unit_type: 'gramos',
    qty: 100,
  },
  {
    sku: 'WU456',
    name: 'Beans',
    description: 'This is a great beans',
    unit_price: 5000,
    unit_type: null,
    qty : 50
  },
  {
    sku: 'WU789',
    name: 'Cookies',
    description: 'This are a great cookies',
    unit_price: 300,
    unit_type: null,
    qty: 100,
  }
]
