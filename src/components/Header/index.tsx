import {
  DropDownMenu,
  DropDown,
  DropDownMenuItem,
  Icon,
  Logo,
  LogoContainer,
  MyHeader,
  Name,
  Profile,
  Title,
} from './styles';
import logo from '../../assets/logo_branca.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { signOut } = useAuth();

  return (
    <MyHeader>
      <LogoContainer onClick={() => navigate('/dashboard')}>
        <Logo src={logo} alt="" />
        <Title>Hero HairDresses</Title>
      </LogoContainer>
      <Profile>
        <DropDown onClick={() => setOpen(!open)}>
          <Icon size={18} />
          <Name>Perfil</Name>
          <DropDownMenu open={open}>
            <DropDownMenuItem onClick={() => navigate('/schedules')}>
              Agendamentos
            </DropDownMenuItem>
            <DropDownMenuItem onClick={() => navigate('/edit-profile')}>
              Editar Perfil
            </DropDownMenuItem>
            <DropDownMenuItem onClick={signOut}>Sair</DropDownMenuItem>
          </DropDownMenu>
        </DropDown>
      </Profile>
    </MyHeader>
  );
};
