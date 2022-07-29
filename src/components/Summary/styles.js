import styled from 'styled-components';

const DivInfo = styled.div`
  font-family: sans-serif;
  display: flex;
  font-size: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const DivAboutMe = styled.div`
  display: flex;
  border: 1px solid pink;
  margin: 20px;
  width: 600px;
  align-items: center;
  text-align: center;
`;

const BgBlack = styled.div`
  background: #222;
  -webkit-transform: rotate(-2deg);
  -ms-transform: rotate(-2deg);
  transform: rotate(-2deg) translatey(30px);
  width: 100%;
  height: 52px;
`;

export { DivInfo, DivAboutMe, BgBlack };
