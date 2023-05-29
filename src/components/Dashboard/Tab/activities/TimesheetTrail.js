import styled from 'styled-components';

export default function TimesheetTrail({ children, name }) {
  return (
    <TimesheetTrailStyle>
      <h3>{name}</h3>
      <div className="content">{children}</div>
    </TimesheetTrailStyle>
  );
}

const TimesheetTrailStyle = styled.div`
  flex-shrink: 0;
  width: 288px;

  h3 {
    margin-bottom: 12px;
    font-family: 'Roboto';
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7b7b7b;
  }

  & > div {
    padding: 12px;
    height: 392px;
    border: 1px solid #d7d7d7;
    border-right: none;
    overflow-y: scroll;
  }

  &:last-child > div {
    border-right: 1px solid #d7d7d7;
  }
`;
