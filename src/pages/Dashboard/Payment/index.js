import styled from 'styled-components';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle.js';
import TabSectionTitle from '../../../components/Dashboard/Tab/TabSectionTitle.js';
import ChoiceButton from '../../../components/Dashboard/Tab/ChoiceButton.js';
import { useState } from 'react';

export default function Payment() {
  const [chosenTicket, setChosenTicket] = useState(null);
  const ticketChoices = [
    { name: 'Presencial', price: 250, isRemote: false },
    { name: 'Online', price: 100, isRemote: true },
  ];

  return (
    <StyleTab>
      <TabTitle>Ingresso e Pagamento</TabTitle>

      <section className="ticketModality">
        <TabSectionTitle>Primeiro, escolha sua modalidade de ingresso</TabSectionTitle>
        <div className="choices">
          {ticketChoices.map((ticketChoice) => {
            return (
              <ChoiceButton
                key={ticketChoice.name}
                description={ticketChoice.name}
                price={ticketChoice.price}
                onClick={() => setChosenTicket(ticketChoice)}
                selected={chosenTicket?.name === ticketChoice.name ? true : false}
              />
            );
          })}
        </div>
      </section>
    </StyleTab>
  );
}

const StyleTab = styled.div`
  h1 {
    margin-bottom: 36px;
  }

  section > h2 {
    margin-bottom: 16px;
  }

  .ticketModality > .choices {
    display: flex;

    button {
      margin-right: 24px;
    }
  }
`;
