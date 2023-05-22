import styled from 'styled-components';

export default function RoomButton({ id, capacity, name, state, setState }) {
  return <Button>
    <p>{name}</p>
  </Button>;
}

const Button = styled.button`
  display: flex;
  width: 80px;
  height: 30px;
  background-color: gray;
`;
