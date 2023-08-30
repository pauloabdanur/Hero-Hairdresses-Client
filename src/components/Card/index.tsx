import { getHours, isAfter } from 'date-fns';
import {
  Background,
  DeleteIcon,
  EditIcon,
  Hour,
  HourWrapper,
  Icons,
  Name,
} from './styles';
import { useState } from 'react';
import { ModalEdit } from '../ModalEdit';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { api } from '../../server';

interface CardProps {
  name: string;
  phone: string;
  date: Date;
  id: string;
}

export const Card = ({ name, phone, date, id }: CardProps) => {
  const isAfterDate = isAfter(new Date(date), new Date());
  const hour = getHours(new Date(date));
  const [openModal, setOpenModal] = useState(false);

  let formatedPhone = phone.replace(/\D/g, '');
  formatedPhone = formatedPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = async () => {
    try {
      const deletedSchedule = await api.delete(`/schedules/${id}`);
      toast.success('Agendamento deletado com sucesso');
      console.log('Agendamento deletado: ', deletedSchedule);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
      console.log(error);
    }
  };

  return (
    <>
      <Background>
        <HourWrapper>
          <Hour disabled={!isAfterDate}>{hour}h</Hour>
          <Name>
            {name} - {formatedPhone}
          </Name>
        </HourWrapper>
        <Icons>
          <EditIcon
            color="#5f68b1"
            size={20}
            onClick={() => isAfterDate && handleModalOpen()}
          />
          <DeleteIcon
            color="#eb2e2e"
            size={20}
            onClick={() => isAfterDate && handleDelete()}
          />
        </Icons>
      </Background>
      <ModalEdit
        isOpen={openModal}
        handleModal={handleModalOpen}
        hour={String(hour)}
        name={name}
        id={id}
      />
    </>
  );
};
