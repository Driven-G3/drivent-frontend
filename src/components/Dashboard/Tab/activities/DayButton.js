import styled from 'styled-components';

export default function DayButton({ text, selected, onClick = () => {} }) {
  return (
    <DayButtonStyle onClick={onClick} selected={selected}>
      {text}
    </DayButtonStyle>
  );
}

const DayButtonStyle = styled.button`
  padding: 11px 26px;

  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;

  color: #000000;

  background: ${(props) => (props.selected ? '#FFD37D' : '#e0e0e0')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;

  cursor: pointer;
`;
