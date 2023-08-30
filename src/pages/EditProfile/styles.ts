import styled from 'styled-components';
import { FiEdit2 } from 'react-icons/fi';

export const Container = styled.div`
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

export const FormWrapper = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 2rem;
`;

export const ProfileForm = styled.form``;

export const FileInput = styled.input`
  display: none;
`;

export const PictureWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;

export const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const PicLabel = styled.label`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-radius: 50%;
  display: inline-flex;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 10px;
  right: 35%;
  cursor: pointer;
`;

export const PicIcon = styled(FiEdit2)``;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const CancelButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background: none;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  text-decoration: none;
  font-weight: 300px;
  border-radius: 16px;
  padding: 0.5rem 1.5rem;
  width: 30%;

  &&:hover {
    background: ${(props) => props.theme.colors.gray_50};
  }
`;

export const ConfirmButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  text-decoration: none;
  font-weight: 300px;
  border-radius: 16px;
  padding: 0.5rem 1.5rem;
  width: 30%;

  &&:hover {
    background: ${(props) => props.theme.colors.secondary_50};
  }
`;
