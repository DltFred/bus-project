import { createContext, useState } from 'react'

export const ShopContext = createContext()

export function ShopProvider ({ children }) {
  const key = new Date().getTime()
  const [cart, setCart] = useState([])
  console.log(cart)
  const assignToCart = (newBuy) => setCart([...cart, { [key]: newBuy }])
  return <ShopContext.Provider value={{ cart, assignToCart }}>{children}</ShopContext.Provider>
}
