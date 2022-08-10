import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsTable, TransctionsContainer } from "./styles";

export function Transctions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransctionsContainer>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento  de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/08/2022</td>
            </tr>

            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHighlight variant="outcome"> - R$ 60,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/07/2022</td>
            </tr>

          </tbody>
        </TransactionsTable>
      </TransctionsContainer>

    </div>
  )
}