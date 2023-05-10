import styled from 'styled-components';

export default function TabTitle({ children }) {
  return <TitleStyle>{children}</TitleStyle>;
}

const TitleStyle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  line-height: 40px;

  color: #000000;
`;
