import styled from 'styled-components';

export default function RoomButton({ id, capacity, name, state, setState, selected=false }) {
  function renderCapacityIcon(capacity) {
    const icons = [];
    for (let index = 0; index !== capacity; index++) {
      console.log(state);
      icons.push(<ion-icon name="person" />);
    }
    return icons;
  }

  return (
    <Button state={state} selected={selected} onClick={() => setState(id)}>
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
  background-color: ${(props) => (props.selected ? '#FFEED2' : 'inherit')};
  :hover {
    cursor: pointer;
  }
`;
