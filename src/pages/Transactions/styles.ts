import styled from 'styled-components'
import { mobile } from '../../styles/resposive'

export const TransctionsContainer = styled.main`
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1120px;
  margin: 4rem auto 2rem;
`

export const AreaTable = styled.div`
  width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-spacing: 0 0.5rem;
  border-collapse: separate;

  ${mobile({ fontSize: '0.875rem' })};

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    ${mobile({ padding: '0.875rem' })};
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${mobile({ display: 'flex', width: '120px' })};

  color: ${({ variant, theme }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
`
