/* eslint-disable react/jsx-handler-names */
import Layout from 'components/Layout'
import { useAuth } from 'hooks/useAuth'
import { useField } from 'hooks/useField'
import { InputText } from 'primereact/inputtext'
import style from 'styles/login.module.css'

export default function SignInScreen () {
  const email = useField({ type: 'text' })
  const password = useField({ type: 'text' })
  const { user, loading, signin, signup } = useAuth()
  const handleSignIn = () => {
    signin(email.value, password.value)
  }
  const handleSignUp = () => {
    signup(email.value, password.value)
  }
  return (
    <Layout>
      <main className={style.main}>
        <span className='p-float-label'>
          <InputText
            type='email'
            value={email.value}
            onChange={email.onChange}
          />
          <label>Email</label>
        </span>
        <span className='p-float-label'>
          <InputText
            type='password'
            value={password.value}
            onChange={password.onChange}
          />
          <label>Contraseña</label>
        </span>
        <button
          disabled={loading || user}
          onClick={handleSignUp}
          type='submit'
          className={`p-button p-button-raised p-button-primary ${style.button}`}
        >
          Registrarse
        </button>
        <button
          disabled={loading || user}
          onClick={handleSignIn}
          type='submit'
          className={`p-button p-button-raised p-button-secondary ${style.button}`}
        >
          Iniciar sesion
        </button>
      </main>
    </Layout>
  )
}
