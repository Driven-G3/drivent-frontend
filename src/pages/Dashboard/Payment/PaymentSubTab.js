import { useContext } from 'react';
import CardArea from '../../../components/Dashboard/Tab/Payment/CardArea.js';
import { ChoosedTicket } from '../../../components/Dashboard/Tab/Payment/ChoosedTicket.js';
import TabSectionTitle from '../../../components/Dashboard/Tab/TabSectionTitle.js';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle.js';
import styled from 'styled-components';
import PaymentContext from '../../../contexts/PaymentContext.js';
import { AiFillCheckCircle } from 'react-icons/ai';

function PaymentIsConfirmed() {
  return (
    <PaymentIsConfirmedStyle>
      <AiFillCheckCircle color="#37B853" size="40px" />
      <div>
        <p>Pagamento confirmado!</p>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </div>
    </PaymentIsConfirmedStyle>
  );
}

export default function PaymentSubTab() {
  const { confirmedPayment } = useContext(PaymentContext);

  return (
    <StyleTab>
      <TabTitle>Ingresso e Pagamento</TabTitle>
      <ChoosedTicket />

      <section>
        <TabSectionTitle>Pagamento</TabSectionTitle>
        {!confirmedPayment ? <CardArea /> : <PaymentIsConfirmed />}
      </section>
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

const PaymentIsConfirmedStyle = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 14px;
  }

  & > div * {
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 19px;

    color: #454545;
  }

  & > div > p:first-child {
    font-weight: 700;
  }
`;
