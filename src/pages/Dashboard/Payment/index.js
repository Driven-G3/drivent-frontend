import styled from 'styled-components';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle.js';
import TabSectionTitle from '../../../components/Dashboard/Tab/TabSectionTitle.js';
import ChoiceButton from '../../../components/Dashboard/Tab/Payment/ChoiceButton.js';
import { useState } from 'react';
import ChoiceSection from '../../../components/Dashboard/Tab/Payment/ChoiceSection.js';

export default function Payment() {
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
