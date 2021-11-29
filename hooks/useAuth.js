import { AuthContext } from 'context/authContext'
import { logOut, observer, signIn, signUp } from 'firebaseClient/clientApp'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'

export function useAuth () {
  const [loading, setLoading] = useState(false)
  const { user, setUser } = useContext(AuthContext)
  const router = useRouter()
  const signin = (email, password) => {
    setLoading(true)
    signIn(email, password)
    setLoading(false)
  }
  const signup = (email, password) => {
    setLoading(true)
    signUp(email, password)
    setLoading(false)
  }
  const signout = () => logOut()

  useEffect(() => {
    observer(x => setUser(x))
  })
  useEffect(() => {
    user
      ? router.replace('/')
      : router.replace('/login')
  }, [user])

  return {
    user,
    signin,
    signout,
    signup,
    loading
  }
}
