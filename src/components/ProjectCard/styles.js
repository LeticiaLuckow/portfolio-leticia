import styled from 'styled-components';

const ProjectCardDiv = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid pink;
  background-size: cover;

  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);

    span {
      opacity: 100%;
      cursor: pointer;
    }
    #black-div {
      opacity: 0.5;
    }
  }
  cursor: pointer;
  position: relative;
`;

const ProjectDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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

export { ProjectCardDiv, ProjectDiv, SpanCard, BlackDiv };
