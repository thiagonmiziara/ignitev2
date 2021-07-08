import Modal from 'react-modal'

import { useModalNewTransactions } from '../hooks/useModalNewTransactions';

export const NewTransactionModal = () => {
  const {handleCloseNewTransactionModal, isNewTransactionModalOpen} = useModalNewTransactions();
  return (
    <Modal
    isOpen={isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
  >
    <h2>Cadastrar transação</h2>
  </Modal>
  )
}


