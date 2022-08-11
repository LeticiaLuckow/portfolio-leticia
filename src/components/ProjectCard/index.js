import { Github } from '@styled-icons/bootstrap';
import { BlackDiv, ProjectCardDiv, SpanCard } from './styles';

const ProjectCard = ({ image, text }) => {
  return (
    <ProjectCardDiv style={{ backgroundImage: `url("${image}")` }}>
      <BlackDiv id="black-div" />
      <SpanCard>
        {text}
        <a href="https://github.com/LeticiaLuckow">
          <Github width={30} color="white" />
        </a>
      </SpanCard>
    </ProjectCardDiv>
  );
};

export default ProjectCard;
