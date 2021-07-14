import { useTransactions } from "../hooks/useTransactions";

import { convertCurrency, convertDate } from "../utils";
import { Container } from "./style";

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {convertCurrency(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{convertDate(transaction.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};
