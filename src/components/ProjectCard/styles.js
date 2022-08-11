import styled from 'styled-components';

const ProjectCardDiv = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid pink;
  background-size: cover;

  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);

    div {
      opacity: 100%;
      cursor: pointer;
    }
    #black-div {
      opacity: 0.5;
    }
  }
  cursor: pointer;
  position: relative;
  
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;

const BlackDiv = styled.div`
  background: black;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  position: relative;
`;
const SpanCard = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  color: white;
  position: absolute;
  top: 50%;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  font-family: 'Uchen', serif;
`;

export { ProjectCardDiv, SpanCard, BlackDiv };
