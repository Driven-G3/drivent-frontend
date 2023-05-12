import styled from 'styled-components';
import TabTitle from './TabTitle';

export default function WarningScreen({ tabTitle, text }) {
  return (
    <WarningStyle>
      <TabTitle>{tabTitle}</TabTitle>
      <p>{text}</p>
    </WarningStyle>
  );
}

const WarningStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  h1 {
    position: absolute;
    top: 0;
    left: 0;
  }

  p {
    width: 390px;
    font-family: 'Roboto';
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #8e8e8e;
  }
`;
