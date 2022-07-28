import styled from 'styled-components';

const ImgPerfil = styled.img`
  margin: 50px;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const DivInfo = styled.div`
  font-family: sans-serif;
  align-items: flex-start;
  display: flex;

  flex-direction: column;
  font-size: 20px;
`;

const SpanInfo = styled.span`
  margin-bottom: 12px;
`;
export { DivInfo, ImgPerfil, SpanInfo };
