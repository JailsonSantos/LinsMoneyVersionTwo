import styled, { css } from 'styled-components'
import { mobile } from '../../styles/resposive'

export const SummaryContainer = styled.section`
  gap: 2rem;
  width: 100%;
  display: grid;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -5rem;
  max-width: 1120px;
  grid-template-columns: repeat(3, 1fr);

  ${mobile({ display: 'flex', flexDirection: 'column' })};
`

interface SummaryCardProps {
  variant?: 'green' | 'red'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['gray-600']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: flex;
    font-size: 2rem;
    margin-top: 1rem;
  }

  ${({ variant }) =>
    variant === 'green'
      ? css`
          background: ${({ theme }) => theme['green-500']};
        `
      : variant === 'red'
      ? css`
          background: ${({ theme }) => theme['red-500']};
        `
      : css`
          background: ${({ theme }) => theme['gray-700']};
        `}
`
