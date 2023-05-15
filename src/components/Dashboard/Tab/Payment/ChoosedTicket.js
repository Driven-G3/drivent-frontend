import styled from 'styled-components';
import TabSectionTitle from '../TabSectionTitle';
import { useContext } from 'react';
import ChoiceButton from './ChoiceButton';
import PaymentContext from '../../../../contexts/PaymentContext';

export function ChoosedTicket() {
  const { finalPrice, description } = useContext(PaymentContext);

  return (
    <section>
      <TabSectionTitle>Ingresso escolhido</TabSectionTitle>
      <ChoiceButton description={description} price={finalPrice} square={false} onClick={() => {}} selected />
    </section>
  );
}
