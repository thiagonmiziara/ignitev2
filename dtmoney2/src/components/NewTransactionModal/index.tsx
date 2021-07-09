import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { useModalNewTransactions } from '../hooks/useModalNewTransactions'

import { Container, TransactionTypeContainer } from './styles'

export const NewTransactionModal = () => {
  const { handleCloseNewTransactionModal, isNewTransactionModalOpen } = useModalNewTransactions()

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={handleCloseNewTransactionModal} className="react-modal-close">
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
