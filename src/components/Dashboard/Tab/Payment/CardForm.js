import styled from 'styled-components';
import SimpleButton from '../SimpleButton';

export default function CardForm({ onSubmit, handleInputChange, handleInputFocus, cardData }) {
  return (
    <CardFormStyle onSubmit={onSubmit}>
      <div>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={cardData.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <p>E.g.: 49..., 51..., 36..., 37...</p>
      </div>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={cardData.name}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        required
      />

      <div className='flex-row'>
        <input
          type="tel"
          name="expiry"
          placeholder="Valid thru"
          value={cardData.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVV"
          value={cardData.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
      </div>
      <SimpleButton text="FINALIZAR PAGAMENTO" />
    </CardFormStyle>
  );
}

const CardFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div.flex-row {
    display: flex;

    input:first-child {
      flex: 2;
      margin-right: 16px;
    }

    input:last-child {
      flex: 1;
    }
  }

  input {
    padding: 8px;

    border-radius: 8px;
    border: 1px solid #ccc;

    width: 100%;
    max-width: 300px;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #8e8e8e;
  }

  p {
    margin-top: 8px;
    color: #ccc;
    size: 10px;
  }

  & > button{
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
