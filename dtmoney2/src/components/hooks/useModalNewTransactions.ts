import { useContext } from 'react'
import { ModalContext } from '../../context/ContextModalNewTransaction'

export function useModalNewTransactions() {
  const context = useContext(ModalContext)

  return context;
}
