import styled from 'styled-components';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function EventCard({ title, startsAt, endsAt, freeCapacity }) {
  const startHour = new Date(startsAt).getHours();
  const startMinute = new Date(startsAt).getMinutes();

  const endHour = new Date(endsAt).getHours();
  const endMinute = new Date(endsAt).getMinutes();

  const startInMinute = Number(startHour) * 60 + Number(startMinute);
  const endInMinute = Number(endHour) * 60 + Number(endMinute);

  const durationInHours = (endInMinute - startInMinute) / 60;

  function timeToString(time) {
    const d = new Date(time);
    const hour = d.getHours().toString().padStart(2, 0);
    const minute = d.getMinutes().toString().padStart(2, 0);
    return hour + ':' + minute;
  }

  return (
    <EventCardStyle duration={durationInHours}>
      <div>
        <h4>{title}</h4>
        <p>
          {timeToString(startsAt)} - {timeToString(endsAt)}
        </p>
      </div>

      <div className="action">
        {freeCapacity > 0 && (
          <div className="wrapper">
            <BiLogIn color="#078632" size={24} />
            <p>{freeCapacity} vagas</p>
          </div>
        )}

        {freeCapacity === 0 && (
          <div className="wrapper wrapper--sold-out">
            <AiOutlineCloseCircle color="#CC6666" size={24} />
            <p>esgotado</p>
          </div>
        )}
      </div>
    </EventCardStyle>
  );
}

const EventCardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${(props) => {
    const { duration } = props;
    const tamanho = duration * 80 + (duration - (duration % 2.4) - 1) * 10;
    return tamanho + 'px';
  }};
  margin-bottom: 10px;

  background: #f1f1f1;
  border-radius: 5px;

  & > div:first-child {
    height: 100%;
    padding-top: 12px;
    padding-left: 10px;

    h4 {
      margin-bottom: 6px;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #343434;
    }

    p {
      font-family: 'Roboto';
      font-size: 12px;
      line-height: 14px;
      color: #343434;
    }
  }
  .action {
    height: 100%;
    padding: 10px 0;
    cursor: pointer;
  }

  .action > .wrapper {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 66px;
    height: 100%;

    border-left: 1px solid #cfcfcf;

    svg {
      margin-right: 4px;
    }

    p {
      font-family: 'Roboto';
      font-size: 9px;
      line-height: 11px;
      color: #078632;
    }
  }

  .action > .wrapper--sold-out {
    p {
      margin-top: 6px;
      color: #cc6666;
    }
  }
`;
