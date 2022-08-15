import { AvaiableCoffes } from "./style"
import { CoffeeInformations } from "../CoffeeLayout"

const avaiableCoffes = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    flags: ['tradicional'],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/americano.svg',
    price: 9.90
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    flags: ['tradicional'],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/expressoAmericano.svg',
    price: 9.90
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    flags: ['tradicional'],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/expressoCremoso.svg',
    price: 9.90
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    flags: [
      'tradicional',
      'gelado'
    ],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/cafeGelado.svg',
    price: 9.90
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    flags: [
      'tradicional',
      'com leite'
    ],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/cafeComLeite.svg',
    price: 9.90
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    flags: [
      'tradicional',
      'com leite'
    ],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/latte.svg',
    price: 9.90
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    flags: [
      'tradicional',
      'com leite'
    ],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/capuccino.svg',
    price: 9.90
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    flags: [
      'tradicional',
      'com leite'
    ],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/macchiato.svg',
    price: 9.90
  }
]

export function AvaiableCoffees() {
  return (
    <AvaiableCoffes>
      <h2>Nossos cafés</h2>
      <div>
        {avaiableCoffes.map(coffee => <CoffeeInformations key={Math.random()} coffee={coffee} />)}
      </div>
    </AvaiableCoffes>
  )
}