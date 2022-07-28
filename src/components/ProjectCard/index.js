import { BlackDiv, ProjectCardDiv, SpanCard } from './styles';

const ProjectCard = ({ image, text }) => {
  return (
    <ProjectCardDiv style={{ backgroundImage: `url("${image}")` }}>
      <BlackDiv id="black-div" />
      <SpanCard>{text}</SpanCard>
    </ProjectCardDiv>
  );
};

export default ProjectCard;
