import { Github, Triangle } from '@styled-icons/bootstrap';
import { BlackDiv, DivLinks, ProjectCardDiv, SpanCard } from './styles';

const ProjectCard = ({ image, text, link, linkProjeto }) => {
  return (
    <ProjectCardDiv style={{ backgroundImage: `url("${image}")` }}>
      <BlackDiv id="black-div" />
      <SpanCard>
        {text}
        <DivLinks>
          <a href={link} target="_blank" rel="noreferrer">
            <Github width={30} color="white" style={{ margin: '4px' }} />
          </a>
          {linkProjeto && (
            <a href={linkProjeto} target="_blank" rel="noreferrer">
              <Triangle width={30} color="white" style={{ margin: '4px' }} />
            </a>
          )}
        </DivLinks>
      </SpanCard>
    </ProjectCardDiv>
  );
};

export default ProjectCard;
