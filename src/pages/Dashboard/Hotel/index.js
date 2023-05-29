import TabTitle from '../../../components/Dashboard/Tab/TabTitle';
import ChoiceSection from '../../../components/Dashboard/Tab/Hotel/ChoiceSection.js';

import { useState } from 'react';
import useHotelList from '../../../hooks/api/useHotelList.js';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { useContext } from 'react';
import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen';
import RoomsSection from './RoomsSection';
import PaymentContext from '../../../contexts/PaymentContext';
import useUserTicket from '../../../hooks/api/useUserTicket';
import SubmitHotel from '../../../components/Dashboard/Tab/Hotel/SubmitHotel';

export default function Hotel() {
  const { enrollment } = useEnrollment();
  const { userTicket } = useUserTicket();
  const { hotelList } = useHotelList();
  const roomList = null;
  const [chosenHotel, setChosenHotel] = useState(null);
  const [chosenRoom, setChosenRoom] = useState(null);

  if (!enrollment || !userTicket) {
    return (
      <WarningScreen
        text="Você precisa completar sua inscrição antes de prosseguir para a escolha do hotel"
        tabTitle="Hotel e Quarto"
      />
    );
  }
  if (userTicket.status === 'RESERVED') {
    return (
      <WarningScreen
        text="Você precisa completar seu pagamento antes de prosseguir para a escolha do hotel"
        tabTitle="Hotel e Quarto"
      />
    );
  }
  if (userTicket.status === 'PAID') {
    return (
      <>
        <TabTitle>Escolha de hotel e quarto</TabTitle>
        <ChoiceSection
          className="hotelSelection"
          title="Primeiro, escolha seu hotel"
          choices={hotelList}
          state={chosenHotel}
          setState={setChosenHotel}
        />
        {chosenHotel ? (
          <RoomsSection hotel={chosenHotel} state={chosenRoom} setState={setChosenRoom} choices={roomList} />
        ) : (
          <></>
        )}

        {chosenRoom ? <SubmitHotel /> : <></>}
      </>
    );
  }
  return;
}
