import { AuthProvider } from 'context/authContext'
import { ShopProvider } from 'context/shopContext'
import style from './style.module.css'
const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <ShopProvider>
        <div className={style.container}>
          <main className={style.main}>
            {children}
          </main>
        </div>
      </ShopProvider>
    </AuthProvider>
  )
}
export default Layout
