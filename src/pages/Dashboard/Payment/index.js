import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';

export default function Payment() {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  function submit() {
    console.log(state);
  };
  return (<>
    <Text>Pagamento</Text>
    <PaymentFormContainer>
      <CardContainer> 
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
      </CardContainer>
      <InputContainer
        onSubmit={submit} >
        <Input1
          type="tel"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        {/* <Subtitle>E.g.:49...,51...,36...,37...</Subtitle> */}
        <Input1
          type="text"
          name="name"
          placeholder="Name"
          value={state.text}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <InputLayout>
          <Input2
            type="tel"
            name="expiry"
            placeholder="Valid thru"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <Input3
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </InputLayout>
        <Button type='submit'>FINALIZAR PAGAMENTO</Button>
      </InputContainer>
    </PaymentFormContainer>
  </>
  );
};
const PaymentFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  position: absolute;
  left: 335px;
  margin-left: 20px;

`;
const Button = styled.button`
  position: absolute;
  width: 182px;
  height: 37px;
  left: 0px;
  top: 203px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-left: 20px;

  `;

const CardContainer = styled.div`
  /* flex-basis: 60%; */
  text-align: left;
`;

const InputContainer = styled.form`
  flex-basis: 40%;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  margin-right: 150px;
  margin-left: 30px;

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
    display:flex;
    width: 300px;
    justify-content: space-between;
`;
const Text = styled.div`
  margin-top:290px;
  margin-left: 20px;
`;
