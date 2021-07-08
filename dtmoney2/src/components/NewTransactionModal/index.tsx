import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
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

      <button 
        type="button"
        onClick={handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
