import styled from 'styled-components';

export default function SimpleButton({ text, onClick = () => {} }) {
  return <SimpleButtonStyle onClick={onClick}>{text}</SimpleButtonStyle>;
}

const SimpleButtonStyle = styled.button`
  padding: 11px 13px;

  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;

  color: #000000;

  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;

  cursor: pointer;
`;
