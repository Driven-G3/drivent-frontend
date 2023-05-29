import styled from 'styled-components';

export default function CenterText({ children }) {
  return <TitleStyle>{children}</TitleStyle>;
}

const TitleStyle = styled.h1`
position: relative;
left: 200px;
top: 200px;

width: 411px;
height: 46px;


font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;

color: #8E8E8E;
`;
