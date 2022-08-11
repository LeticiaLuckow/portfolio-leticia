import styled from 'styled-components';

const DivIcons = styled.div`
  flex-direction: row;
  font-size: 20px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;

export { DivIcons };
