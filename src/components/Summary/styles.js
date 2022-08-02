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
  padding: 40px;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const SpanSocialMedia = styled.span`
  margin-bottom: 12px;
  display: flex;
  margin: 40px 40px 0 40px;
`;

const DivSocialMedia = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export { DivInfo, DivAboutMe, SpanSocialMedia, DivSocialMedia };
