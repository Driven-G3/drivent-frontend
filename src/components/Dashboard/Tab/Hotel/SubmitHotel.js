import React from 'react';
import styled from 'styled-components';

export default function SubmitHotel() {
  return <SubmitButton>RESERVAR QUARTO</SubmitButton>;
}

const SubmitButton = styled.button`
  margin-top: 45px;
  display: flex;
  height: 45px;
  width: 190px;
  border: 1px solid #cecece;
  border-radius: 4px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;
