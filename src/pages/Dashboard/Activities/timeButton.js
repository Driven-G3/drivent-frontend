import styled from 'styled-components';

export default function TimeButton({ dates }) {
  return (
    <>
      {dates.map((date) => (
        <Button key={date}>{date}</Button>
      ))}
    </>
  );
}

const Button = styled.button`
  display: flex;
  width: 140px;
  height: 37px;
  background-color: #e0e0e0;
  margin-right: 17px;
  margin-top: 17px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  font-size: 15px;
  font-family: 'Roboto';
  justify-content: center;
  align-items: center;
`;
