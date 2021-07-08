import { createContext, ReactNode, useState } from 'react'

interface ModalContextProps {
  handleCloseNewTransactionModal: () => void
  handleOpenNewTransactionModal: () => void
  isNewTransactionModalOpen: boolean
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        isNewTransactionModalOpen,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

