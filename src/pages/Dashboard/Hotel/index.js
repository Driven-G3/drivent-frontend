import TabTitle from '../../../components/Dashboard/Tab/TabTitle';
import ChoiceSection from '../../../components/Dashboard/Tab/Payment/ChoiceSection.js';
import { useState } from 'react';
import styled from 'styled-components';
import RoomButton from './RoomButton';
import useHotelList from '../../../hooks/api/useHotelList.js';

export default function Hotel() {
  const [chosenHotel, setChosenHotel] = useState(null);
  const [chosenRoom, setChosenRoom] = useState(null);
  const { hotelList } = useHotelList();
  console.log(hotelList[0]);
  const roomChoices = [
    {
      id: 2,
      name: 'Padrão',
      capacity: 1,
      hotelId: 1,
      createdAt: '2023-05-19T20:12:22.024Z',
      updatedAt: '2023-05-19T20:12:22.024Z',
    },
    {
      id: 3,
      name: 'Presidencial',
      capacity: 2,
      hotelId: 1,
      createdAt: '2023-05-19T20:12:22.037Z',
      updatedAt: '2023-05-19T20:12:22.037Z',
    },
  ];
  const hotelChoices = [
    {
      id: 1,
      name: 'Hotel California',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
      createdAt: '2023-05-19T20:12:22.008Z',
      updatedAt: '2023-05-19T20:12:22.010Z',
    },
  ];
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
      <RoomsSection className="roomSelection" title="Boa pedida! Agora escolha seu quarto:">
        {roomChoices.map((room) => {
          return <RoomButton id={room.id} name={room.name} capacity={room.capacity} state={chosenRoom} setState={setChosenRoom} />;
        })}
      </RoomsSection>
    </>
  );
}

const RoomsSection = styled.div`
  background-color: red;
  width: 300px;
  height: 300px;
  .choices {
    width: 100px;
    height: 30px;
    background-color: blue;
  }
`;
