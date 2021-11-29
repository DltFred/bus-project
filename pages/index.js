/* eslint-disable react/jsx-handler-names */
import { BusCard } from 'components/busCard'
import { BuyCounter } from 'components/buyCounter'
import { ConfirmModal } from 'components/confirmModal'
import Layout from 'components/Layout'
import { buses } from 'dataDummy'
import { useAuth } from 'hooks/useAuth'
import { useField } from 'hooks/useField'
import 'primeicons/primeicons.css'
import { InputText } from 'primereact/inputtext'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { useState } from 'react'
import styles from 'styles/home.module.css'

export default function Home () {
  const search = useField({ type: 'text' })
  const [busClicked, setBusClicked] = useState()
  const [showModal, setShowModal] = useState(false)
  const { signout } = useAuth()

  const includeInSearch = route => route.toLowerCase().includes(search.value.toLowerCase())

  const filteredBuses = buses.filter(bus =>
    bus.routes.some(includeInSearch)
  )

  return (
    <Layout>
      <div className={styles.logout} onClick={signout}>Cerrar sesión</div>
      <h1 className={styles.h1}>EasyBus
        <img className={styles.logo} src='images/logo.png' />
      </h1>
      <BuyCounter />
      <span className={`${styles.search} p-input-icon-left`}>
        <i className='pi pi-search' />
        <InputText className={styles.inputSearch} value={search.value} onChange={search.onChange} placeholder='¿A donde vas?' />
      </span>
      <div className={styles.card}>
        {filteredBuses.map(bus => (
          <BusCard
            key={bus.id}
            name={bus.name}
            routes={bus.routes}
            ticket={bus.ticketPrice}
            onClick={() => {
              setBusClicked(bus)
              setShowModal(true)
            }}
          />
        ))}
      </div>
      <ConfirmModal
        bus={busClicked}
        open={showModal}
        setOpen={setShowModal}
      />
    </Layout>
  )
}
