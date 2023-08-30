import { ButtonText, StyledButton } from './styles';

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <StyledButton>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};
