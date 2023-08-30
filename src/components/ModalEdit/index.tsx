import {
  Background,
  Body,
  CancelButton,
  CloseIcon,
  DateInput,
  EditButton,
  Footer,
  Header,
  HourSelect,
  Info,
  InputDiv,
  ModalContainer,
  Title,
} from './styles';
import { useAuth } from '../../hooks/useAuth';
import { formatISO, getHours, parseISO, setHours } from 'date-fns';
import { useState } from 'react';
import { api } from '../../server';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';

interface Props {
  isOpen: boolean;
  handleModal: () => void;
  hour: string;
  name: string;
  id: string;
}

export const ModalEdit = ({ isOpen, handleModal, hour, name, id }: Props) => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [hourSchedule, setHourSchedule] = useState('');
  const { availableSchedules, schedules, date, handleSetDate } = useAuth();

  const filteredDate = availableSchedules.filter((hour) => {
    const isAvailable = !schedules.find((scheduleItem) => {
      const scheduleDate = new Date(scheduleItem.date);
      const scheduleHour = getHours(scheduleDate);
      return scheduleHour === Number(hour);
    });

    return isAvailable;
  });

  const handleChangeHour = (hour: string) => {
    setHourSchedule(hour);
  };

  const updateData = async () => {
    const formattedDate = formatISO(
      setHours(parseISO(date), parseInt(hourSchedule))
    );
    console.log(formattedDate);
    try {
      await api.put(`/schedules/${id}`, {
        date: formattedDate,
      });
      toast.success('Atualizado com sucesso');
      handleModal();
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <Background>
          <ModalContainer>
            <Header>
              <Title>Editar Horário</Title>
              <CloseIcon size={25} onClick={handleModal} />
            </Header>
            <Body>
              <Info>
                {hour}h {name}
              </Info>
              <InputDiv>
                <label htmlFor="">Indique uma nova data</label>
                <DateInput
                  type="date"
                  defaultValue={currentDate}
                  min={currentDate}
                  onChange={(e) => handleSetDate(e.target.value)}
                />
              </InputDiv>
              <InputDiv>
                <label htmlFor="">Indique um novo horário</label>
                <HourSelect
                  name=""
                  id=""
                  onChange={(e) => handleChangeHour(e.target.value)}
                >
                  {filteredDate.map((hour, index) => {
                    return (
                      <option value={hour} key={index}>
                        {hour}:00
                      </option>
                    );
                  })}
                </HourSelect>
              </InputDiv>
            </Body>
            <Footer>
              <CancelButton onClick={handleModal}>Cancelar</CancelButton>
              <EditButton onClick={updateData}>Editar</EditButton>
            </Footer>
          </ModalContainer>
        </Background>
      )}
    </>
  );
};
