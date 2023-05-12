import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle.js';
import ChoiceSection from '../../../components/Dashboard/Tab/Payment/ChoiceSection.js';
import OrderSummary from '../../../components/Dashboard/Tab/Payment/OrderSummary.js';
import useEnrollment from '../../../hooks/api/useEnrollment.js';
import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen.js';
import UserContext from '../../../contexts/UserContext.js';
import { ChoosedTicket } from '../../../components/Dashboard/Tab/Payment/ChoosedTicket.js';
import Card from '../../../components/Dashboard/Tab/Payment/Card.js';
import TabSectionTitle from '../../../components/Dashboard/Tab/TabSectionTitle.js';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [chosenTicket, setChosenTicket] = useState(null);
  const [chosenAccommodation, setChosenAccommodation] = useState(null);
  const { paymentEnvironment, setPaymentEnvironment } = useContext(UserContext);
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

  return (<>
    {paymentEnvironment ? <StyleTab>
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
        <OrderSummary sum={chosenTicket.price + chosenAccommodation.price} text={chosenTicket.name + ' ' + chosenAccommodation.name}  />
      )}
    </StyleTab> : <>
      <StyleTab>
        <TabTitle>Ingresso e Pagamento</TabTitle>
        <ChoosedTicket></ChoosedTicket>
      </StyleTab>

      <Card></Card>
    </>}
  </>
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
