import styled from 'styled-components';
import TabSectionTitle from '../TabSectionTitle';
import { useContext } from 'react';
import UserContext from '../../../../contexts/UserContext';
import ChoiceButton from './ChoiceButton';

export function ChoosedTicket() {
  const { finalPrice, setFinalPrice, description } = useContext(UserContext);

  return (
    <section>
      <TabSectionTitle>Ingresso escolhido</TabSectionTitle>
      <ChoiceButton description={description} price={finalPrice} square={false} onClick={() => {}} selected />
    </section>
  );
}

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 108px;
  border-radius: 20px;
  background-color: #ffeed2;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Description = styled.p`
  margin-bottom: 3px;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 19px;
  color: #454545;
`;
const Price = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;
  color: #898989;
`;
