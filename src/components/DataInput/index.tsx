import { ForwardRefRenderFunction, forwardRef } from 'react';
import { Container, MyInput, InputLabel, ErrorTxt } from './styles';

interface InputProps {
  type: 'password' | 'text' | 'date';
  error?: string;
  label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, error, label, ...rest },
  ref
) => {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <MyInput type={type} ref={ref} {...rest} />
      {error && <ErrorTxt>{error}</ErrorTxt>}
    </Container>
  );
};

export const DataInput = forwardRef(InputBase);
