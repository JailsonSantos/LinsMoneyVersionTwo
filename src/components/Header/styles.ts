import styled from 'styled-components'
import { mobile } from '../../styles/resposive'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 1120px;
  align-items: center;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })};
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 0.2s;
  }

  ${mobile({ marginTop: '1rem' })};
`
