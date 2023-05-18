import styled from 'styled-components';
import TabTitle from '../../../components/Dashboard/Tab/TabTitle';
import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import ConfirmedPayment  from './ConfirmedPayment';
import CenterText from '../../../components/Dashboard/Tab/hotel/CenterText';

export default function Hotel() {
  const { paymentConfirmed, setPaymentConfirmed } = useContext(UserContext);
  console.log(paymentConfirmed);

  return (<>
    <TabTitle>
      Escolha de hotel e quarto
    </TabTitle>
    {paymentConfirmed=='confirmed'? <ConfirmedPayment/>:<CenterText>Você precisa ter confirmado pagamento antes
    de fazer a escolha de hospedagem</CenterText> }
  </>
  );
}
