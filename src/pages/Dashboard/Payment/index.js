import React, { useContext } from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import useEnrollment from '../../../hooks/api/useEnrollment.js';
import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen.js';
import PaymentSubTab from './PaymentSubTab.js';
import TicketsSubTab from './TicketsSubTab.js';
import PaymentContext from '../../../contexts/PaymentContext.js';
import useUserTicket from '../../../hooks/api/useUserTicket.js';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const { paymentEnvironment } = useContext(PaymentContext);
  const { userTicket } = useUserTicket();
  if (!enrollment) {
    return (
      <WarningScreen
        text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso"
        tabTitle="Ingresso e Pagamento"
      />
    );
  }

  if (userTicket) {
    return <PaymentSubTab />;
  }

  return <>{paymentEnvironment ? <PaymentSubTab /> : <TicketsSubTab />}</>;
}
