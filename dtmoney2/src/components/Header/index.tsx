import logoImg from '../../assets/logo.svg'
import { useModalNewTransactions } from '../hooks/useModalNewTransactions';

import { Container, Content } from './style'


export const Header = () => {
 
  const {handleOpenNewTransactionModal} = useModalNewTransactions();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
