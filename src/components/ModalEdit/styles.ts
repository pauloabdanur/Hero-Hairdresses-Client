import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
`;

export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 16px 16px 0 0;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const Title = styled.h2``;

export const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
`;

export const Info = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
`;

export const InputDiv = styled.div`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  align-items: center;
`;

export const DateInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  width: 40%;
  padding: 0.3rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const HourSelect = styled.select`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  width: 40%;
  padding: 0.3rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Body = styled.div`
  padding: 1rem 2rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 2rem 2rem;
`;

export const CancelButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background: none;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  text-decoration: none;
  font-weight: 300px;
  border-radius: 16px;
  padding: 0.3rem 1.5rem;
  width: 30%;

  &&:hover {
    background: ${(props) => props.theme.colors.gray_50};
  }
`;

export const EditButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  text-decoration: none;
  font-weight: 300px;
  border-radius: 16px;
  padding: 0.3rem 1.5rem;
  width: 30%;

  &&:hover {
    background: ${(props) => props.theme.colors.secondary_50};
  }
`;
