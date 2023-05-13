import Card from '../../../components/Dashboard/Tab/Payment/Card.js';
import { ChoosedTicket } from '../../../components/Dashboard/Tab/Payment/ChoosedTicket.js';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle.js';
import styled from 'styled-components';

export default function PaymentSubTab() {
  return (
    <StyleTab>
      <TabTitle>Ingresso e Pagamento</TabTitle>
      <ChoosedTicket></ChoosedTicket>
      <Card></Card>
    </StyleTab>
  );
}

const StyleTab = styled.div`
  h1 {
    margin-bottom: 36px;
  }

  h2 {
    margin-bottom: 17px;
  }

  section {
    margin-bottom: 44px;
  }
`;
