import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

export const Background = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
`;

export const HourWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Hour = styled.span<{ disabled: boolean }>`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.gray_300
      : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 8px 0 0 8px;
  padding: 0.8rem;
  margin-right: 1rem;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
`;

export const Icons = styled.div`
  margin-right: 0.5rem;
`;

export const EditIcon = styled(AiOutlineEdit)`
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  margin-right: 0.5rem;
  cursor: pointer;
`;
