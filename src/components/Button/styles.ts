import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ButtonText = styled.span`
  font-size: 1rem;
`;
