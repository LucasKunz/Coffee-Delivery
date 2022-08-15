import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { Benefits, CoffeeIcon, HomeContainer, InfoContainer, PackageIcon, ShoppingIcon, TimerIcon } from "./style"
import coffeeImage from '../../assets/coffee.svg'
import { AvaiableCoffees } from "../../components/AvaiableCoffees"

export function Home() {
  return (
    <HomeContainer>
      <InfoContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <Benefits>
            <div>
              <ShoppingIcon>
                <ShoppingCart color='#fff' weight="fill" size={16} />
              </ShoppingIcon>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <PackageIcon>
                <Package color='#fff' weight="fill" size={16} />
              </PackageIcon>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <TimerIcon>
                <Timer color='#fff' weight="fill" size={16} />
              </TimerIcon>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <CoffeeIcon>
                <Coffee color='#fff' weight="fill" size={16} />
              </CoffeeIcon>
              <span>O café chega fresquinho até você</span>
            </div>
          </Benefits>
        </div>
        <img src={coffeeImage} alt="" />
      </InfoContainer>
      <AvaiableCoffees />
    </HomeContainer>
  )
}