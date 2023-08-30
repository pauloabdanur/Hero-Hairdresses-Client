import {
  Background,
  Card,
  CardText,
  Container,
  InputForm,
  Logo,
  MyLink,
  Subtitle,
  SpanTxt,
  Wrapper,
} from './styles';
import logo from '../../assets/logo.webp';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { useAuth } from '../../hooks/useAuth';

interface IFormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('Campo de email obrigatório'),
    password: yup
      .string()
      .min(6, 'Mínimo de 6 caracteres')
      .required('Campo de senha obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const submit = handleSubmit(({ email, password }) => {
    try {
      signIn({ email, password });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Background>
      <Container>
        <Wrapper>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <Card>
            <CardText>Olá! Seja Bem Vindo(a)!</CardText>
            <InputForm onSubmit={submit}>
              <Input
                placeholder="Email"
                type="text"
                {...register('email', { required: true })}
                error={errors.email && errors.email.message}
                icon={<AiOutlineMail size={20} />}
              />
              <Input
                placeholder="Senha"
                type="password"
                {...register('password', { required: true })}
                error={errors.password && errors.password.message}
                icon={<BsKey size={20} />}
              />
              <Button text="Entrar" />
            </InputForm>
            <Subtitle>
              <SpanTxt>
                Ainda não tem conta?{' '}
                <MyLink to={'/register'}>Cadastre-se</MyLink>
              </SpanTxt>
            </Subtitle>
          </Card>
        </Wrapper>
      </Container>
    </Background>
  );
};
