import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../../../contexts/UserContext';

export default function ChoiceButton({ description, price, square = true, onClick, selected = false }) {
  const { ticketType, setTicketType } = useContext(UserContext);

  function handlerClick() {
    setTicketType(description);
    console.log(ticketType);
    onClick();
  }

  return (
    <ButtonStyle square={square} selected={selected} onClick={handlerClick}>
      <Description>{description}</Description>
      <Price>R$ {price}</Price>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: ${(props) => (props.square ? '145px' : 'initial')};
  height: ${(props) => (props.square ? '145px' : '108px')};
  padding: ${(props) => (!props.square ? '0 60px': 'initial')};

  border: ${(props) => (props.selected ? 'none' : '1px solid #cecece')};
  border-radius: 20px;

  background-color: ${(props) => (props.selected ? '#FFEED2' : 'inherit')};
  cursor: pointer;
`;

const Description = styled.p`
  margin-bottom: 3px;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 19px;
  color: #454545;
`;

const Price = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;
  color: #898989;
`;
