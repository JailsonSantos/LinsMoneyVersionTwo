import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // Usando a funcão Reduce para calcular o summary
  // e useMemo para evitar que a variável seja recriada
  const summary = useMemo(() => {
    return transactions.reduce(
      (acumulator, transaction) => {
        if (transaction.type === 'income') {
          acumulator.income += transaction.price
          acumulator.total += transaction.price
        } else {
          acumulator.outcome += transaction.price
          acumulator.total -= transaction.price
        }

        return acumulator
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
