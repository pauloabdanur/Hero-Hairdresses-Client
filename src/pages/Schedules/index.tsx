import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header';
import { DataInput } from '../../components/DataInput';
import {
  CancelButton,
  ConfirmButton,
  Container,
  DateInputs,
  Footer,
  FormWrapper,
  HourLabel,
  HourSelect,
  HourWrapper,
  ScheduleForm,
  Title,
} from './styles';
import { useAuth } from '../../hooks/useAuth';
import { formatISO, getHours, parseISO, setHours } from 'date-fns';
import { api } from '../../server';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IScheduleFormValues {
  name: string;
  phone: string;
  date: string;
  hour: string;
}

export const Schedules = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Campo Nome do Cliente obrigatório'),
    phone: yup.string().required('Campo Celular obrigatório'),
    date: yup.string().required('Campo Data obrigatório'),
    hour: yup.string().required('Campo Hora obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IScheduleFormValues>({
    resolver: yupResolver(schema),
  });
  const currentDate = new Date().toISOString().split('T')[0];
  const { availableSchedules, schedules, date, handleSetDate } = useAuth();
  const navigate = useNavigate();

  const filteredDate = availableSchedules.filter((hour) => {
    const isAvailable = !schedules.find((scheduleItem) => {
      const scheduleDate = new Date(scheduleItem.date);
      const scheduleHour = getHours(scheduleDate);
      return scheduleHour === Number(hour);
    });

    return isAvailable;
  });

  const submit = handleSubmit(async ({ name, phone, date, hour }) => {
    const formattedDate = formatISO(setHours(parseISO(date), parseInt(hour)));
    console.log(formattedDate);
    try {
      await api.post(`/schedules/`, {
        name,
        phone,
        date: formattedDate,
      });
      toast.success('Agendado com sucesso');
      navigate('/dashboard');
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
      console.log(error);
    }
  });

  return (
    <Container>
      <Header />
      <Title>Agendamento de Horário</Title>
      <FormWrapper>
        <ScheduleForm onSubmit={submit}>
          <DataInput
            label="Nome do Cliente"
            type="text"
            {...register('name', { required: true })}
            error={errors.name && errors.name.message}
          />
          <DataInput
            label="Celular"
            type="text"
            {...register('phone', { required: true })}
            error={errors.phone && errors.phone.message}
          />

          <DateInputs>
            <DataInput
              label="Dia"
              type="date"
              {...register('date', {
                required: true,
                value: currentDate,
                onChange: (e) => handleSetDate(e.target.value),
              })}
              error={errors.date && errors.date.message}
            />
            <HourWrapper>
              <HourLabel>Hora</HourLabel>
              <HourSelect
                {...register('hour', {
                  required: true,
                })}
              >
                {filteredDate.map((hour, index) => {
                  return (
                    <option value={hour} key={index}>
                      {hour}:00
                    </option>
                  );
                })}
              </HourSelect>
              {errors.hour && <span>{errors.hour.message}</span>}
            </HourWrapper>
          </DateInputs>

          <Footer>
            <CancelButton>Cancelar</CancelButton>
            <ConfirmButton>Agendar</ConfirmButton>
          </Footer>
        </ScheduleForm>
      </FormWrapper>
    </Container>
  );
};
