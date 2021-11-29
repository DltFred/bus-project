import { ShopContext } from 'context/shopContext'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Toast } from 'primereact/toast'
import { useContext, useRef } from 'react'
import style from './style.module.css'

export const ConfirmModal = ({ open, setOpen, bus }) => {
  const { assignToCart } = useContext(ShopContext)
  const toast = useRef(null)
  const handleBuy = () => {
    assignToCart(bus)
    showInfo()
    setOpen(false)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const renderFooter = () => {
    return (
      <div>
        <Button label='Cancelar' icon='pi pi-times' onClick={handleClose} className='p-button-text' />
        <Button label='Comprar' icon='pi pi-check' onClick={handleBuy} autoFocus />
      </div>
    )
  }
  const showInfo = () => {
    toast.current.show({ severity: 'success', summary: 'Operación exitosa', detail: 'Se ha realizado la compra correctamente', life: 3000 })
  }
  return (
    <div className={style.dialog}>
      <Toast ref={toast} />
      <Dialog header={bus?.name} visible={open} onHide={() => setOpen(false)} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
        <p>
          Por favor confirma para comprar el boleto de <span className={style.span}>{bus?.name}</span>
        </p>
        <p>Costo del boleto: <span className={style.span}>S/.{bus?.ticketPrice}</span></p>
      </Dialog>
    </div>
  )
}
