import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MyInput = styled.input`
  width: 100%;
  padding: 0.7rem 2.2rem;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray_50};
  background-color: ${(props) => props.theme.colors.white};
`;

export const Icon = styled.i`
  position: absolute;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
`;

export const ErrorTxt = styled.span`
  color: rgb(193, 32, 32);
`;
