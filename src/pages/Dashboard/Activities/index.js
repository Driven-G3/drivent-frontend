import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen';
import useUserTicket from '../../../hooks/api/useUserTicket';

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

  return 'Atividades: Em breve!';
}
