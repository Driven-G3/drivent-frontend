import styled from 'styled-components';
import TabSectionTitle from '../TabSectionTitle';
import { useContext } from 'react';
import UserContext from '../../../../contexts/UserContext';

export function ChoosedTicket() {
  const { finalPrice, setFinalPrice, description } = useContext(UserContext);

  return (<>
    <TabSectionTitle>Ingresso escolhido</TabSectionTitle>
    <ButtonStyle >
      <Description>{description}</Description>
      <Price>R${finalPrice} </Price>
    </ButtonStyle>
    <TabSectionTitle>Pagamento</TabSectionTitle>
  </>
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
  background-color: #FFEED2 ;
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
