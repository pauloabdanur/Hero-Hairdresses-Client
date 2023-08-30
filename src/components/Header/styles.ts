import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';

export const MyHeader = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;
  border-radius: 8px;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  margin-right: 0.5rem;
`;

export const Title = styled.span``;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled(CgProfile)``;

export const Name = styled.span`
  margin-left: 0.3rem;
`;

export const DropDown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const DropDownMenu = styled.ul<{ open: boolean }>`
  position: absolute;
  background-color: ${(props) => props.theme.colors.primary};
  top: 100%;
  right: -20px;
  padding: 0;
  list-style-type: none;
  border-radius: 8px;
  opacity: ${(props) => (props.open ? 1 : 0)};

  transition: opacity 0.2s ease;
`;
export const DropDownMenuItem = styled.li`
  padding: 0.7rem 1rem;

  &:hover {
    background-color: #64a2a4;
    border-radius: 8px;
  }
`;
