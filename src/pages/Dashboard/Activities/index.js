import styled from 'styled-components';
import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen';
import useUserTicket from '../../../hooks/api/useUserTicket';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle';
import { activitiesDays } from './mock';
import EventCard from '../../../components/Dashboard/Tab/activities/EventCard';

export default function Activities() {
  const { userTicket } = useUserTicket();

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
        <div>
          <h3>Auditório Principal</h3>
          <div className="content">
            <EventCard title="Minecraft: montando o PC ideal" startsAt="09:00" endsAt="11:45" freeCapacity={0} />
          </div>
        </div>

        <div>
          <h3>Auditório Principal</h3>
          <div className="content">
            <EventCard title="Minecraft: montando o PC ideal" startsAt="09:00" endsAt="10:00" freeCapacity={20} />
          </div>
        </div>
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

  & > div {
    flex-shrink: 0;
    width: 288px;
  }

  h3 {
    margin-bottom: 12px;
    font-family: 'Roboto';
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7b7b7b;
  }

  .content {
    padding: 12px;
    height: 392px;
    border: 1px solid #d7d7d7;
    border-right: none;
  }

  & > div:last-child .content {
    border-right: 1px solid #d7d7d7;
  }
`;
