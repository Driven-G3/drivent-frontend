import styled from 'styled-components';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle.js';
import { useState } from 'react';
import ChoiceSection from '../../../components/Dashboard/Tab/Payment/ChoiceSection.js';
import OrderSummary from '../../../components/Dashboard/Tab/Payment/OrderSummary.js';
import useEnrollment from '../../../hooks/api/useEnrollment.js';
import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen.js';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [chosenTicket, setChosenTicket] = useState(null);
  const [chosenAccommodation, setChosenAccommodation] = useState(null);
  const ticketChoices = [
    { name: 'Presencial', price: 250, isRemote: false },
    { name: 'Online', price: 100, isRemote: true },
  ];
  const accommodationChoices = [
    { name: 'Sem Hotel', price: 0, includesHotel: false },
    { name: 'Com Hotel', price: 350, includesHotel: true },
  ];

  if (!enrollment) {
    return (
      <WarningScreen
        text="Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso"
        tabTitle="Ingresso e Pagamento"
      />
    );
  }

  return (
    <StyleTab>
      <TabTitle>Ingresso e Pagamento</TabTitle>

      <ChoiceSection
        className="ticketModality"
        title="Primeiro, escolha sua modalidade de ingresso"
        choices={ticketChoices}
        state={chosenTicket}
        setState={setChosenTicket}
      />

      {chosenTicket?.name === 'Presencial' && (
        <ChoiceSection
          className="includesHotel"
          title="Ótimo! Agora escolha sua modalidade de hospedagem"
          choices={accommodationChoices}
          state={chosenAccommodation}
          setState={setChosenAccommodation}
        />
      )}
      {chosenTicket?.name === 'Online' && <OrderSummary sum={chosenTicket.price} />}

      {chosenTicket && chosenAccommodation && chosenTicket.name !== 'Online' && (
        <OrderSummary sum={chosenTicket.price + chosenAccommodation.price} />
      )}
    </StyleTab>
  );
}

const StyleTab = styled.div`
  h1 {
    margin-bottom: 36px;
  }

  section {
    margin-bottom: 44px;
  }
`;
