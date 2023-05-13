import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import SimpleButton from '../SimpleButton';

export default function Card() {
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
    //setConfirmedPayment(true);
  }
  return (
    <div>
      <Layout>
        <CardContainer>
          <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
        </CardContainer>
        
      </Layout>
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
