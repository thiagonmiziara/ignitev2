import { createContext, ReactNode, useState } from 'react'

interface ModalContextProps {
  handleCloseNewTransactionModal: () => void
  handleOpenNewTransactionModal: () => void
  isNewTransactionModalOpen: boolean
}

interface ModalProviderProps {
  children: ReactNode
}

export const ContextModalNewTransaction = createContext<ModalContextProps>({} as ModalContextProps)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <ContextModalNewTransaction.Provider
      value={{
        isNewTransactionModalOpen,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
      }}
    >
      {children}
    </ContextModalNewTransaction.Provider>
  )
}

