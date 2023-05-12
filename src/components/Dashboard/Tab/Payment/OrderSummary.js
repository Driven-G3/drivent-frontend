import styled from 'styled-components';
import TabSectionTitle from '../TabSectionTitle';
import SimpleButton from '../SimpleButton';
import UserContext from '../../../../contexts/UserContext';
import { useContext } from 'react';

export default function OrderSummary({ sum, text }) {
  const { paymentEnvironment, setPaymentEnvironment, finalPrice, setFinalPrice, description, setDescription  } = useContext(UserContext);

  function goForPayment() {
    if(text==undefined) {
      setDescription('Online');
    }else{
      setDescription(text);
    }
    console.log('entrou');
    setPaymentEnvironment(false);
    setFinalPrice(sum);
  };

  return (
    <OrderSummaryStyle>
      <TabSectionTitle>
        Fechado! O total ficou em <strong>R$ {sum}</strong>. Agora é só confirmar:
      </TabSectionTitle>
      <SimpleButton text="RESERVAR INGRESSO" onClick={() => { goForPayment();}} />
    </OrderSummaryStyle>
  );
};  

const OrderSummaryStyle = styled.section`
  h2 {
    margin-bottom: 16px;
  }
`;
