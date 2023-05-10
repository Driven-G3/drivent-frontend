import styled from 'styled-components';

export default function TabSectionTitle({ children }) {
  return <SectionTitleStyle>{children}</SectionTitleStyle>;
}

const SectionTitleStyle = styled.h2`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;
