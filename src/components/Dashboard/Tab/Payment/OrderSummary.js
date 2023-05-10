import styled from 'styled-components';
import TabSectionTitle from '../TabSectionTitle';
import SimpleButton from '../SimpleButton';

export default function OrderSummary({ sum }) {
  return (
    <OrderSummaryStyle>
      <TabSectionTitle>
        Fechado! O total ficou em <strong>R$ {sum}</strong>. Agora é só confirmar:
      </TabSectionTitle>
      <SimpleButton text="RESERVAR INGRESSO" onClick={() => {}} />
    </OrderSummaryStyle>
  );
}

const OrderSummaryStyle = styled.section`
  h2 {
    margin-bottom: 16px;
  }
`;
