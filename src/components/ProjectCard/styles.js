import styled from 'styled-components';

const ProjectCardDiv = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid red;
  background-size: cover;

  &:hover {
    span {
      opacity: 100%;
      cursor: pointer;
    }
    #black-div {
      opacity: 0.5;
    }
  }
  position: relative;
`;
const BlackDiv = styled.div`
  background: black;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  position: relative;
`;
const SpanCard = styled.span`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  color: white;
  position: absolute;
  top: 50%;
  text-align: center;
  width: 100%;

  font-family: 'Uchen', serif;
`;

export { ProjectCardDiv, SpanCard, BlackDiv };
