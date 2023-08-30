import styled from 'styled-components';
import backgroundLogin from '../../assets/background_login.webp';
import { Link } from 'react-router-dom';

export const Background = styled.div`
  background-image: url(${backgroundLogin});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: end;
  padding: 2rem;
`;

export const Logo = styled.div`
  text-align: center;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.gray_100};
  box-shadow: 4px 8px 4px rgb(0, 0, 0, 0.2);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
`;

export const CardText = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-style: normal;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const InputForm = styled.form``;

export const Subtitle = styled.div`
  text-align: left;
  margin-top: 1rem;
`;

export const SpanTxt = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
  font-size: 0.8rem;
`;

export const MyLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
`;
