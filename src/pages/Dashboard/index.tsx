import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/useAuth';
import {
  Calendar,
  CardWrapper,
  Container,
  Message,
  Picker,
  Schedule,
  Text,
  TitleWrapper,
} from './styles';

import 'react-day-picker/dist/style.css';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import { api } from '../../server';

interface ISchedule {
  name: string;
  phone: string;
  date: Date;
  id: string;
}

export const Dashboard = () => {
  const { user } = useAuth();
  const [date, setDate] = useState(new Date());
  const [schedules, setSchedules] = useState<ISchedule[]>([]);

  const isWeekend = (date: Date) => {
    const day = date.getDay();

    return day === 0 || day === 6;
  };

  const isWeekDay = (date: Date) => {
    const day = date.getDay();

    return day !== 0 && day !== 6;
  };

  const handleDataChange = (date: Date) => {
    setDate(date);
  };

  useEffect(() => {
    api
      .get('/schedules', {
        params: {
          date,
        },
      })
      .then((response) => setSchedules(response.data))
      .catch((error) => console.log(error));
  }, [date]);

  return (
    <Container>
      <Header />
      <TitleWrapper>
        <h2>Bem vindo(a), {user.name}</h2>
        <Message>
          Esta é sua lista de horários do dia {format(date, 'dd/MM/yyyy')}
        </Message>
      </TitleWrapper>
      <Text>Próximos Horários</Text>
      <Schedule>
        <CardWrapper>
          {schedules.map((schedule, index) => {
            return (
              <Card
                key={index}
                name={schedule.name}
                phone={schedule.phone}
                date={schedule.date}
                id={schedule.id}
              />
            );
          })}
        </CardWrapper>
        <Picker>
          <Calendar
            selected={date}
            classNames={{ day: 'day' }}
            mode="single"
            disabled={isWeekend}
            modifiers={{ available: isWeekDay }}
            modifiersClassNames={{ selected: 'selected' }}
            onDayClick={handleDataChange}
            locale={ptBR}
            fromMonth={new Date()}
          />
        </Picker>
      </Schedule>
    </Container>
  );
};
