import { ShopContext } from 'context/shopContext'
import { useContext } from 'react'
import style from './style.module.css'
export const BuyCounter = () => {
  const { cart } = useContext(ShopContext)
  return (
    <div>
      <i className={`${style.cart} pi pi-shopping-cart`} />
      <div className={style.cartCounter}>{cart?.length || 0}</div>
    </div>
  )
}
