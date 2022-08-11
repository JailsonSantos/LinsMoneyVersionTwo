import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input{
    flex: 1;
    border: 0;
    padding: 1rem;
    border-radius: 6px;
    color: ${({ theme }) => theme["gray-300"]};
    background: ${({ theme }) => theme["gray-900"]};

    &::placeholder{
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button{
    gap: 0.75rem;
    display: flex;
    align-items: center;

    border: 0;
    padding: 1rem;
    cursor: pointer;
    font-weight: bold; 
    border-radius: 6px;
    background: transparent; 
    color: ${({ theme }) => theme["green-300"]};  
    border: 1px solid ${({ theme }) => theme["green-300"]};

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover{
      color: ${({ theme }) => theme.white};  
      background:${({ theme }) => theme["green-300"]};
      border: 1px solid ${({ theme }) => theme["green-500"]}; 
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;