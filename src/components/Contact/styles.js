import styled from 'styled-components';

const DivInfo = styled.div`
  font-family: sans-serif;
  align-items: flex-start;
  display: flex;

  flex-direction: column;
  font-size: 20px;
`;

const ContactDiv = styled.div`
  background: black;
  padding: 6%;
  background: rgb(207, 171, 177);
  margin-top: 40px;
  clip-path: polygon(0 15%, 100% 0, 100% 86%, 0% 100%);
`;
export { DivInfo, ContactDiv };
