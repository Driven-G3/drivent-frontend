import TabTitle from '../../../components/Dashboard/Tab/TabTitle.js';
import ChoiceSection from '../../../components/Dashboard/Tab/Payment/ChoiceSection.js';
import OrderSummary from '../../../components/Dashboard/Tab/Payment/OrderSummary.js';
import useTicketTypes from '../../../hooks/api/useTicketTypes.js';
import { createTicket } from '../../../services/ticketApi.js';
import useToken from '../../../hooks/useToken.js';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import UserContext from '../../../contexts/UserContext.js';

export default function TicketsSubTab() {
  const token = useToken();
  const { ticketTypes } = useTicketTypes();
  const [chosenTicket, setChosenTicket] = useState(null);
  const [chosenAccommodation, setChosenAccommodation] = useState(null);
  const { setDescription, setFinalPrice, setPaymentEnvironment } = useContext(UserContext);

  const ticketChoices = [
    { name: 'Presencial', price: 250, isRemote: false },
    { name: 'Online', price: 100, isRemote: true },
  ];
  const accommodationChoices = [
    { name: 'Sem Hotel', price: 0, includesHotel: false },
    { name: 'Com Hotel', price: 350, includesHotel: true },
  ];

  function goForPayment(sum) {
    const text = chosenAccommodation && chosenTicket.name + ' + ' + chosenAccommodation.name;
    if (text == undefined) {
      setDescription('Online');
    } else {
      setDescription(text);
    }
    setPaymentEnvironment(true);
    setFinalPrice(sum);
  }

  async function bookTicket(sum) {
    console.log(findTicketTypeId());
    try {
      await createTicket(
        {
          ticketTypeId: findTicketTypeId(),
        },
        token
      );
      goForPayment(sum);
      toast('Reserva feita com sucesso!');
    } catch (error) {
      console.log(error);
      toast('Não foi possível realizar sua reserva');
    }
  }

  function findTicketTypeId() {
    const [type] = ticketTypes.filter((ticket) => {
      return (
        ticket.isRemote === !!chosenTicket.isRemote && ticket.includesHotel === !!chosenAccommodation?.includesHotel
      );
    });
    return type.id;
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

      {chosenTicket?.name === 'Online' && (
        <OrderSummary sum={chosenTicket.price} actionBtn={() => bookTicket(chosenTicket.price)} />
      )}

      {chosenTicket && chosenAccommodation && chosenTicket.name !== 'Online' && (
        <OrderSummary
          sum={chosenTicket.price + chosenAccommodation.price}
          actionBtn={() => bookTicket(chosenTicket.price + chosenAccommodation.price)}
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
