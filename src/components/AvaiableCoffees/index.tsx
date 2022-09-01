import { AvaiableCoffes } from "./style"
import { CoffeeInformations } from "../CoffeeLayout"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const IS_MOBILE = window.innerWidth < 768

const avaiableCoffes = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    flags: ['tradicional'],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/americano.svg',
    price: 9.90,
    quantity: 0
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    flags: ['tradicional'],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/expressoAmericano.svg',
    price: 10.90,
    quantity: 0
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    flags: ['tradicional'],
    image: 'http://127.0.0.1:5173/src/assets/avaiableCoffes/expressoCremoso.svg',
    price: 10.50,
    quantity: 0
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
    price: 10.50,
    quantity: 0
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
    price: 9.90,
    quantity: 0
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
    price: 12.00,
    quantity: 0
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
    price: 12.00,
    quantity: 0
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
    price: 12.50,
    quantity: 0
  }
]

export function AvaiableCoffees() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.8,
      spacing: 10,
    },
  });

  return (
    <AvaiableCoffes>
      <h2>Nossos cafés</h2>
      <div>
        {IS_MOBILE ? (
          <div ref={ref} className="keen-slider">
            {avaiableCoffes.map(coffee => <CoffeeInformations key={coffee.id} coffee={coffee} />)}
          </div>
        ) : (
          avaiableCoffes.map(coffee => <CoffeeInformations key={coffee.id} coffee={coffee} />)
        )}
      </div>
    </AvaiableCoffes>
  )
}