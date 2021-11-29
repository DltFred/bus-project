import React from 'react'
import styles from './index.module.css'

export const BusCard = ({ name, ticket, routes, ...props }) => {
  const imageName = name?.toLowerCase().replace(/ /g, '-') || 'default-image'

  return (
    <div className={styles.card} {...props}>
      <img alt={name} src={`images/cards/${imageName}.jpg`} />
      <section className={styles.body}>
        <h2>{name || 'Sin nombre'}</h2>
        <p>Pasaje: S/.{ticket || '0.0'}</p>
        <ul className={styles.list}>
          {routes?.map(route => (
            <li key={route}> - {route}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
