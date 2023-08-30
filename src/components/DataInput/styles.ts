import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const InputLabel = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const MyInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 16px;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: transparent;
`;

export const ErrorTxt = styled.span`
  color: rgb(193, 32, 32);
`;
