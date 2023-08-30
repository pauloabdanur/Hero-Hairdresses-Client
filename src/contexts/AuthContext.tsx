import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../server';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContextData {
  signIn: ({ email, password }: ISignIn) => void;
  signOut: () => void;
  user: IUserData;
  availableSchedules: Array<string>;
  schedules: Array<ISchedule>;
  date: string;
  handleSetDate: (date: string) => void;
  isAuthenticated: boolean;
}

interface ISchedule {
  name: string;
  phone: string;
  date: Date;
  id: string;
}

interface IUserData {
  name: string;
  email: string;
  avatar_url: string;
}

interface ISignIn {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [date, setDate] = useState('');

  const availableSchedules = [
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
  ];
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    }
    return {};
  });

  const isAuthenticated = !!user && Object.keys(user).length !== 0;

  const handleSetDate = (date: string) => {
    setDate(date);
  };
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/schedules', {
        params: {
          date,
        },
      })
      .then((response) => {
        console.log('useEffect', response);
        setSchedules(response.data);
      })
      .catch((error) => console.log(error));
  }, [date]);

  const signIn = async ({ email, password }: ISignIn) => {
    try {
      const { data } = await api.post('/users/auth', {
        email,
        password,
      });

      const { token, refresh_token, user } = data;
      const userInfo = {
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url,
      };

      localStorage.setItem('token', token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('user', JSON.stringify(userInfo));

      navigate('/dashboard');

      toast.success(`Seja bem vindo(a), ${userInfo.name}`);
      setUser(userInfo);

      return data;
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error('Erro ao realizar o login. Tente mais tarde');
      }
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');

    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        availableSchedules,
        schedules,
        date,
        handleSetDate,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
