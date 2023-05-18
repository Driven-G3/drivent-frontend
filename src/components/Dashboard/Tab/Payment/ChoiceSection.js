import styled from 'styled-components';
import TabSectionTitle from '../TabSectionTitle';
import ChoiceButton from './ChoiceButton';

export default function ChoiceSection({ className, title, choices, state, setState }) {
  return (
    <SectionStyle className={className}>
      <TabSectionTitle>{title}</TabSectionTitle>
      <div className="choices">
        {choices.map((choice) => {
          const { name, price } = choice;
          return (
            <ChoiceButton
              key={name}
              description={name}
              price={price}
              onClick={() => setState(choice)}
              selected={state?.name === name ? true : false}
              
            />
          );
        })}
      </div>
    </SectionStyle>
  );
}

const SectionStyle = styled.section`
  h2 {
    margin-bottom: 16px;
  }

  .choices {
    display: flex;

    button {
      margin-right: 24px;
    }
  }
`;
