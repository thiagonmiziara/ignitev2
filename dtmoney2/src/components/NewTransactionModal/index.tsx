import Modal from 'react-modal'

import { useModalNewTransactions } from '../hooks/useModalNewTransactions'

import { Container } from './styles'

export const NewTransactionModal = () => {
  const { handleCloseNewTransactionModal, isNewTransactionModalOpen } = useModalNewTransactions()
  return (
    <Modal
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTransactionModal}
     overlayClassName="react-modal-overlay"
     className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Titulo"
        />

        <input 
          type="number"
          placeholder="Valor"
        />

        <input 
          placeholder="Categoria"
        />  

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  )
}
