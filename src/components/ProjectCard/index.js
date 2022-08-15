import { Github } from '@styled-icons/bootstrap';
import { BlackDiv, ProjectCardDiv, SpanCard } from './styles';

const ProjectCard = ({ image, text, link }) => {
  return (
    <ProjectCardDiv style={{ backgroundImage: `url("${image}")` }}>
      <BlackDiv id="black-div" />
      <SpanCard>
        {text}
        <a href={link} target="_blank" rel="noreferrer">
          <Github width={30} color="white" />
        </a>
      </SpanCard>
    </ProjectCardDiv>
  );
};

export default ProjectCard;
