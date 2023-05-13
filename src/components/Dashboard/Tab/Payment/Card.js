import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import SimpleButton from '../SimpleButton';
import useUserTicket from '../../../../hooks/api/useUserTicket';
import { processPayment } from '../../../../services/paymentApi';
import useToken from '../../../../hooks/useToken';
import { toast } from 'react-toastify';

export default function Card() {
  const { userTicket } = useUserTicket();
  const token = useToken();
  const [state, setState] = useState({
    issuer: '',
    number: '',
    expirationDate: '',
    cvv: '',
    name: '',
    focus: '',
  });
  const [issuer, setIssuer] = useState();
  const [confirmedPayment, setConfirmedPayment] = useState(false);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  async function submit(e) {
    e.preventDefault();
    //setConfirmedPayment(true);
    try {
      const payment = await processPayment(
        {
          cardData: { ...state, issuer: issuer },
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
    <div>
      {confirmedPayment ? (
        <Div>
          <AiFillCheckCircle color="#37B853" />
          <Text>
            <h1>Pagamento confirmado!</h1>
            <h1>Prossiga para escolha de hospedagem e atividades</h1>
          </Text>
        </Div>
      ) : (
        <Layout>
          <CardContainer>
            <Cards
              callback={(type, _) => {
                setIssuer(type.issuer);
              }}
              number={state.number}
              expiry={state.expirationDate}
              cvc={state.cvv}
              name={state.name}
              focused={state.focus}
            />
          </CardContainer>
          <InputContainer onSubmit={submit}>
            <Input1
              type="tel"
              name="number"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            <h1>E.g.:49...,51...,36...,37...</h1>
            <Input1
              type="text"
              name="name"
              placeholder="Name"
              value={state.text}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            <InputLayout>
              <Input2
                type="tel"
                name="expirationDate"
                placeholder="Valid thru"
                value={state.expirationDate}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
              <Input3
                type="tel"
                name="cvv"
                placeholder="CVC"
                value={state.cvv}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </InputLayout>
            <SimpleButton text="FINALIZAR PAGAMENTO" />
          </InputContainer>
        </Layout>
      )}
    </div>
  );
}

const Text = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  margin-top: 10px;
  svg {
    height: 50px;
    width: 50px;
  }
`;
const Layout = styled.div`
  display: flex;
  margin-top: 21px;
`;

const CardContainer = styled.div`
  /* flex-basis: 60%; */
  text-align: left;
`;

const InputContainer = styled.form`
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 220px;
  margin-right: 150px;
  margin-left: 30px;
  h1 {
    color: gray;
    size: 10px;
  }
`;
const Input1 = styled.input`
  margin: 8px 0;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
`;

const Input2 = styled.input`
  margin: 8px 0;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 150px;
`;
const Input3 = styled.input`
  margin: 8px 0;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 100px;
`;
const InputLayout = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
