import styled from 'styled-components';

const DivInfo = styled.div`
  font-family: sans-serif;
  align-items: flex-start;
  display: flex;

  flex-direction: column;
  font-size: 20px;
`;

const MediaContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const ContactDiv = styled.div`
  background: black;
  padding: 6%;
  background: rgb(207, 171, 177);
  margin-top: 40px;
  clip-path: polygon(0 15%, 100% 0, 100% 86%, 0% 100%);
  @media only screen and (max-width: 600px) {
    padding: 80px 6%;
  }
`;
export { DivInfo, ContactDiv, MediaContact };
