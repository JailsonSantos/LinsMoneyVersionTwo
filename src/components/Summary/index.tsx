import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {

  const { transactions } = useContext(TransactionsContext);

  // Usando a funcão Reduce para calcular o summary
  const summary = transactions.reduce(
    (acumulator, transaction) => {
      if (transaction.type === 'income') {
        acumulator.income += transaction.price;
        acumulator.total += transaction.price;
      } else {
        acumulator.outcome += transaction.price;
        acumulator.total -= transaction.price;
      }

      return acumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ {summary.income}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ {summary.outcome}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ {summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}