import React, { useContext, useState } from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import useEnrollment from '../../../hooks/api/useEnrollment.js';
import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen.js';
import UserContext from '../../../contexts/UserContext.js';
import PaymentSubTab from './PaymentSubTab.js';
import TicketsSubTab from './TicketsSubTab.js';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const { paymentEnvironment } = useContext(UserContext);

  if (!enrollment) {
    return (
      <WarningScreen
        text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso"
        tabTitle="Ingresso e Pagamento"
      />
    );
  }

  return <>{paymentEnvironment ? <PaymentSubTab /> : <TicketsSubTab />}</>;
}
