import styled from 'styled-components';
import RoomButton from './RoomButton';
import { useState } from 'react';
import TabSectionTitle from '../../../components/Dashboard/Tab/TabSectionTitle';

export default function RoomsSection({ hotel, state, setState, choices }) {
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
    {
      id: 4,
      name: 'Executivo',
      capacity: 1,
      hotelId: 2,
      createdAt: '2023-05-19T20:12:22.024Z',
      updatedAt: '2023-05-19T20:12:22.024Z',
    },
    {
      id: 5,
      name: 'Suíte',
      capacity: 2,
      hotelId: 2,
      createdAt: '2023-05-19T20:12:22.037Z',
      updatedAt: '2023-05-19T20:12:22.037Z',
    },
  ];

  return (
    <Section className="roomSelection">
      <TabSectionTitle children="Boa pedida! Agora escolha seu quarto:" />
      <div>
        {roomChoices
          .filter((room) => room.hotelId === hotel.id)
          .map((room) => {
            return (
              <RoomButton
                id={room.id}
                name={room.name}
                capacity={room.capacity}
                state={state}
                setState={setState}
                selected={state === room.id ? true : false}
              />
            );
          })}
      </div>
    </Section>
  );
}

const Section = styled.div`
  width: auto;
  height: auto;
  padding-top: 30px;
  > div {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;
