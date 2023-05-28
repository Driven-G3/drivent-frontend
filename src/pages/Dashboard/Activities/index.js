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
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getEventInfo } from '../../../services/eventApi';
import { eachDayOfInterval, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Activities() {
  const { userTicket } = useUserTicket();
  const { activitiesRooms } = useActivitiesRooms();
  const { activities } = useActivities();
 
  const [dates, setDates]= useState([]);
  const [error, setError] = useState([]);

  async function days() {
    try {
      const response = await getEventInfo();
      const { startsAt, endsAt } = response;

      const starts= new Date (startsAt);
      const ends= new Date (endsAt);

      const eventDays= eachDayOfInterval ({ start: starts, end: ends });
      const formatEvent= eventDays.map((day) => format(day, 'EEE, dd/MM', { locale: ptBR }));
      setDates(formatEvent);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    days();
  }, []);

  // if (error) {
  //   return (
  //     <WarningScreen 
  //       tabTitle="Escolha de Atividades"
  //       text="Algo deu errado, por favor, tente novamente."
  //     />
  //   );
  // }
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

  return (
    <StyleTab>
      <TabTitle>Escolha de atividades</TabTitle>

      <Timesheet>
        {activitiesRooms?.map((activityRoom) => {
          return (
            <TimesheetTrail name={activityRoom.name}>
              {activities?.map((activity) => {
                if (activity.locatedAtId === activityRoom.id) {
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
  width: 100%;
  overflow-x: scroll;
`;
