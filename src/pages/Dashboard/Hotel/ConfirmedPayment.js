import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { PaymentConfirmed } from './ConfirmedPayment';
import CenterText from '../../../components/Dashboard/Tab/hotel/CenterText';

export default function ConfirmedPayment() {
  const { ticketType, setTicketType } = useContext(UserContext);

  return(<div>
    {ticketType=='Com Hotel'?<div>com hotel</div>:<CenterText>Sua modalidade de ingresso não inclui hospedagem
  Prossiga para a escolha de atividades </CenterText> }
  </div>
  );
};
