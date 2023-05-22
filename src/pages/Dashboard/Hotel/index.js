import TabTitle from '../../../components/Dashboard/Tab/TabTitle';
import ChoiceSection from '../../../components/Dashboard/Tab/Payment/ChoiceSection.js';
import { useState } from 'react';
import useHotelList from '../../../hooks/api/useHotelList.js';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { useContext } from 'react';
import WarningScreen from '../../../components/Dashboard/Tab/WarningScreen';
import RoomsSection from './RoomsSection';

export default function Hotel() {
  const { enrollment } = useEnrollment();
  const [chosenHotel, setChosenHotel] = useState(null);
  const { hotelList } = useHotelList();

  const hotelChoices = [
    {
      id: 1,
      name: 'Hotel California',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
      createdAt: '2023-05-19T20:12:22.008Z',
      updatedAt: '2023-05-19T20:12:22.010Z',
    },
    {
      id: 2,
      name: 'Hotel Maranhão',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
      createdAt: '2023-05-19T20:12:22.008Z',
      updatedAt: '2023-05-19T20:12:22.010Z',
    },
  ];

  // const { paymentEnvironment } = useContext(PaymentContext);
  if (!enrollment) {
    return (
      <WarningScreen
        text="Você precisa completar seu pagamento antes de prosseguir para a escolha do hotel"
        tabTitle="Escolha de hotel e quarto"
      />
    );
  }
  // return <>{paymentEnvironment ? <PaymentSubTab /> : <TicketsSubTab />}</>;
  return (
    <>
      <TabTitle>Escolha de hotel e quarto</TabTitle>
      <ChoiceSection
        className="hotelSelection"
        title="Primeiro, escolha seu hotel"
        choices={hotelChoices}
        state={chosenHotel}
        setState={setChosenHotel}
      />
      <RoomsSection hotel={chosenHotel}/>
      
    </>
  );
}
