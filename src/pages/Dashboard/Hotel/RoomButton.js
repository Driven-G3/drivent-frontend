import styled from 'styled-components';

export default function RoomButton({ id, capacity, name, state, setState }) {
  let index = 0;
  function renderCapacityIcon(capacity) {
    while (index !== capacity) {
      console.log(index, capacity);
      index = index + 1;
      return <ion-icon name="person" />;
    }
  }

  return (
    <Button onClick={() => console.log('click')}>
      <p>{name}</p>
      <div>{renderCapacityIcon(capacity)}</div>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  height: 45px;
  width: 190px;
  border: 1px solid #cecece;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
`;
