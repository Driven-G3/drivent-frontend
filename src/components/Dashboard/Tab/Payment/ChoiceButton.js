import styled from 'styled-components';

export default function ChoiceButton({ description, price, square = true, onClick, selected = false }) {
  function handlerClick() {
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
  height: 145px;

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
