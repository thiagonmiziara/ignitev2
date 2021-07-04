import {Container} from "./style";

export const TransactionsTable = () => {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>15/03/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1000</td>
            <td>casa</td>
            <td>16/03/2021</td>
          </tr>

       
        </tbody>
      </table>
    </Container>
  )
}

 
