import styled from 'styled-components';
import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen';
import useUserTicket from '../../../hooks/api/useUserTicket';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle';
import { activitiesDays } from './mock';
import EventCard from '../../../components/Dashboard/Tab/activities/EventCard';
import useActivitiesRooms from '../../../hooks/api/useActivitiesRooms';
import TimesheetTrail from '../../../components/Dashboard/Tab/activities/TimesheetTrail';
import useActivities from '../../../hooks/api/useActivities';
import TabSectionTitle from '../../../components/Dashboard/Tab/TabSectionTitle';
import TimeButton from './timeButton';
import { useEffect, useState } from 'react';
import { getEventInfo } from '../../../services/eventApi';
import { eachDayOfInterval, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import SimpleButton from '../../../components/Dashboard/Tab/SimpleButton';
import DayButton from '../../../components/Dashboard/Tab/activities/DayButton';

export default function Activities() {
  const { userTicket, userTicketLoading } = useUserTicket();
  const { activitiesRooms, activitiesRoomsLoading } = useActivitiesRooms();
  const { activities, activitiesLoading } = useActivities();
  const [selectedDay, setSelectedDay] = useState();

  const weekdays = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado',
  };

  function getDays() {
    const days = {};
    const daysArr = [];

    activities.forEach((activity) => {
      const date = new Date(activity.startsAt);
      const stringDate = date.toLocaleDateString();
      const day = date.getDate().toString().padStart(2, 0);
      const month = date.getMonth().toString().padStart(2, 0);
      const weekday = weekdays[date.getDay()];

      if (days[stringDate]) return;

      days[stringDate] = {
        date,
        stringDateBtn: `${weekday}, ${day}/${month}`,
      };
    });

    const keysOfDays = Object.keys(days);
    keysOfDays.sort((a, b) => b - a);

    keysOfDays.forEach((key) => {
      daysArr.push(days[key]);
    });

    return daysArr;
  }

  if (userTicket?.status === 'RESERVED' || !userTicket) {
    return (
      <WarningScreen
        tabTitle="Escolha de Atividades"
        text="Você precisa ter confirmado pagamento antes
              de fazer a escolha de atividades"
      />
    );
  }

  if (userTicket?.TicketType.isRemote) {
    return (
      <WarningScreen
        tabTitle="Escolha de Atividades"
        text="Sua modalidade de ingresso não necessita escolher
        atividade. Você terá acesso a todas as atividades."
      />
    );
  }

  if (activitiesLoading || activitiesRoomsLoading || userTicketLoading) {
    return <WarningScreen tabTitle="Escolha de Atividades" text="Carregando informações..." />;
  }

  return (
    <StyleTab>
      <TabTitle>Escolha de atividades</TabTitle>

      <div className="ChoiceDay">
        {getDays().map((day) => {
          const selected = day.date.toLocaleDateString() === selectedDay?.toLocaleDateString();
          return (
            <DayButton
              key={day.stringDateBtn}
              text={day.stringDateBtn}
              onClick={() => setSelectedDay(day.date)}
              selected={selected}
            />
          );
        })}
      </div>

      <Timesheet>
        {activitiesRooms?.map((activityRoom) => {
          if (!selectedDay) return;
          return (
            <TimesheetTrail name={activityRoom.name}>
              {activities?.map((activity) => {
                const activityDate = new Date(activity.startsAt);
                const sameDate = activityDate.toDateString() === selectedDay?.toDateString();
                if (activity.locatedAtId === activityRoom.id && sameDate) {
                  const { title, startsAt, endsAt, capacity } = activity;
                  return (
                    <EventCard
                      title={title}
                      startsAt={startsAt}
                      endsAt={endsAt}
                      freeCapacity={capacity - activity.Enrollment.length}
                    />
                  );
                }
              })}
            </TimesheetTrail>
          );
        })}
      </Timesheet>
    </StyleTab>
  );
}

const StyleTab = styled.div`
  h1 {
    margin-bottom: 27px;
  }
`;

const Timesheet = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  overflow-x: scroll;
`;
