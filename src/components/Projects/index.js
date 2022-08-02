import ProjectCard from '../ProjectCard';
import { Section } from '../Section/styles';

const Projects = () => {
  return (
    <Section>
      <h1>Projetos</h1>
      <ProjectCard image="/site-movie-lu.png" text="MovieLu" />
    </Section>
  );
};

export default Projects;
