import styled from 'styled-components';

export default function CardForm({ onSubmit }) {
  return (
    <CardFormStyle onSubmit={onSubmit}>
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
          name="expiry"
          placeholder="Valid thru"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <Input3
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
      </InputLayout>
      <SimpleButton text="FINALIZAR PAGAMENTO" />
    </CardFormStyle>
  );
}

const CardFormStyle = styled.form``;
