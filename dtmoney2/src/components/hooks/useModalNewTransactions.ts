import { useContext } from 'react';
import { ContextModalNewTransaction } from '../../context/ContextModalNewTransaction';

export function useModalNewTransactions() {
  const context = useContext(ContextModalNewTransaction);

  return context;
}
