import { Header } from '../../components/Header';
import { DataInput } from '../../components/DataInput';
import {
  CancelButton,
  ConfirmButton,
  Container,
  FileInput,
  Footer,
  FormWrapper,
  PicIcon,
  PicLabel,
  PictureWrapper,
  ProfileForm,
  ProfilePic,
} from './styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import defaultPic from '../../assets/default_pic.avif';
import { toast } from 'react-toastify';
import { api } from '../../server';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface IProfileFormValues {
  picture: File[];
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const EditProfile = () => {
  const [fileUpload, setFileUpload] = useState(defaultPic);
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    const user = userStorage && JSON.parse(userStorage);

    setValue('name', user.name);
    setValue('email', user.email);
    setValue('picture', user.avatar_url);
    if (user.avatar_url) {
      setFileUpload(user.avatar_url);
      console.log(user.avatar_url);
    }
  }, []);

  const schema = yup.object().shape({
    name: yup.string(),
    newPassword: yup.string(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'senha devem ser iguais'),
  });

  const { register, handleSubmit, setValue } = useForm<IProfileFormValues>({
    resolver: yupResolver(schema),
  });

  const submit = handleSubmit(async (data) => {
    try {
      await api.put(`/users`, {
        name: data.name,
        oldPassword: data.password,
        newPassword: data.newPassword,
        avatar_url: data.picture,
      });
      toast.success('Perfil atualizado com sucesso');
      navigate('/dashboard');
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
      console.log(error);
    }
  });

  const handlePicChange = (files: File[]) => {
    const image = files[0];

    const imageUrl = URL.createObjectURL(image);
    setFileUpload(imageUrl);
  };

  return (
    <Container>
      <Header />
      <FormWrapper>
        <ProfileForm onSubmit={submit}>
          <PictureWrapper>
            <ProfilePic src={fileUpload} alt="" />
            <PicLabel>
              <FileInput
                type="file"
                {...register('picture', {
                  required: true,
                  onChange: (e) => handlePicChange(e.target.files),
                })}
              />
              <PicIcon />
            </PicLabel>
          </PictureWrapper>
          <DataInput
            label="Nome"
            type="text"
            {...register('name', { required: true })}
          />
          <DataInput
            label="Email"
            type="text"
            {...register('email', { required: true })}
          />
          <DataInput
            label="Senha Atual"
            type="password"
            {...register('password', { required: true })}
          />
          <DataInput
            label="Nova Senha"
            type="password"
            {...register('newPassword', { required: true })}
          />
          <DataInput
            label="Confirmar Nova Senha"
            type="password"
            {...register('confirmPassword', { required: true })}
          />
          <Footer>
            <CancelButton>Cancelar</CancelButton>
            <ConfirmButton>Confirmar Edição</ConfirmButton>
          </Footer>
        </ProfileForm>
      </FormWrapper>
    </Container>
  );
};
