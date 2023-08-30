import styled from 'styled-components';
import cadastro from '../../assets/cadastro.webp';
import { Link } from 'react-router-dom';

export const Background = styled.div`
  background-image: url(${cadastro});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

export const NavBar = styled.p`
  color: ${(props) => props.theme.colors.white};
  padding-top: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* height: 100vh; */
  align-items: center;
  padding-top: 8rem;
`;

export const Logo = styled.div`
  text-align: center;
  width: 50%;
`;

export const MyLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.gray_100};
  box-shadow: 4px 8px 4px rgb(0, 0, 0, 0.2);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  width: 50%;
`;

export const CardText = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-style: normal;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.div`
  text-align: left;
  margin-top: 1rem;
`;

export const SpanTxt = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
  font-size: 0.8rem;
`;

export const InputForm = styled.form``;
