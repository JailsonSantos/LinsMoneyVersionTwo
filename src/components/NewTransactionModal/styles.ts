import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  inset: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form{     
    gap: 1rem;
    display: flex;
    margin-top: 2rem;
    flex-direction: column;

    input{
      border: 0;
      padding: 1rem;
      border-radius: 6px;
      color: ${({ theme }) => theme["gray-300"]};
      background-color: ${({ theme }) => theme["gray-900"]};

      &::placeholder{
        color: ${({ theme }) => theme["gray-500"]}
      }
    }

    button[type="submit"]{
      border: 0;
      height: 58px;
      cursor: pointer;
      font-weight: bold;
      border-radius: 6px;
      margin-top: 1.5rem;
      padding: 0 1.125rem;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme["green-500"]};

      &:hover{
        transition: background-color 0.2s;
        background: ${({ theme }) => theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  position: absolute;
  background: transparent;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const TransactionType = styled.div`
  gap: 1rem;
  display: grid;
  margin-top: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
`;


interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}
export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  border: 0;
  gap: 0.5rem;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["gray-300"]};
  background-color: ${({ theme }) => theme["gray-700"]};

  svg{
    color: ${({ variant, theme }) => variant === 'income' ? theme["green-300"] : theme["red-300"]}
  }
`;