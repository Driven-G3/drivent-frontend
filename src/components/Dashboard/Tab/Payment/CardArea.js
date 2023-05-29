import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import CardForm from './CardForm';
import useUserTicket from '../../../../hooks/api/useUserTicket';
import { processPayment } from '../../../../services/paymentApi';
import useToken from '../../../../hooks/useToken';
import { toast } from 'react-toastify';
import PaymentContext from '../../../../contexts/PaymentContext';

export default function CardArea() {
  const token = useToken();
  const { userTicket } = useUserTicket();
  const [cardIssuer, setCardIssuer] = useState();
  const { setConfirmedPayment } = useContext(PaymentContext);
  const [cardData, setCardData] = useState({
    issuer: '',
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    let { name, value } = evt.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    let name = evt.target.name;
    setCardData((prev) => ({ ...prev, focus: name }));
  };

  async function submit(e) {
    e.preventDefault();
    setConfirmedPayment(true);
    try {
      const data = {
        ...cardData,
        issuer: cardIssuer,
        expirationDate: cardData.expiry,
        cvv: cardData.cvc,
      };
      delete data.expiry;
      delete data.cvc;

      const payment = await processPayment(
        {
          cardData: data,
          ticketId: userTicket.id,
        },
        token
      );
      setConfirmedPayment(true);
    } catch (error) {
      toast('Algo deu errado com o pagamento!');
    }
  }
  
  return (
    <CardStyle>
      <div>
        <Cards
          callback={(type, _) => {
            setCardIssuer(type.issuer);
          }}
          number={cardData.number}
          expiry={cardData.expiry}
          cvc={cardData.cvc}
          name={cardData.name}
          focused={cardData.focus}
        />
        <CardForm
          cardData={cardData}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          onSubmit={submit}
        />
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  position: relative;
  padding-bottom: 90px;

  & > div {
    display: flex;
  }

  & > div > .rccs {
    margin-left: 0;
    margin-right: 0;
  }

  form {
    margin-left: 24px;
    width: 300px;
  }

  & > button {
    margin-top: 48px;
  }
`;
