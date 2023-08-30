import { ForwardRefRenderFunction, ReactNode, forwardRef } from 'react';
import { Container, Icon, MyInput, InputLabel, ErrorTxt } from './styles';

interface InputProps {
  placeholder: string;
  type: 'password' | 'text' | 'date';
  error?: string;
  icon?: ReactNode;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, type, error, icon, ...rest },
  ref
) => {
  return (
    <Container>
      <InputLabel>
        <Icon aria-hidden="true">{icon}</Icon>
        <MyInput type={type} placeholder={placeholder} ref={ref} {...rest} />
      </InputLabel>
      {error && <ErrorTxt>{error}</ErrorTxt>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
