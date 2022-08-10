import ProjectCard from '../ProjectCard';
import { ProjectDiv } from './styles';
import { Section } from '../Section/styles';

const Projects = () => {
  return (
    <Section id="projetos">
      <h1>Projetos</h1>
      <ProjectDiv>
        <ProjectCard image="/site-movie-lu.png" text="MovieLu" />
        <ProjectCard image="/landing-page.png" text="Landing Page" />
        <ProjectCard image="/projeto-picpro.png" text="Projeto PicPro" />
        <ProjectCard image="/to-do-list.png" text="Lista de Atividades" />
        <ProjectCard image="/projeto-infusion.png" text="Projeto Infusion" />
      </ProjectDiv>
    </Section>
  );
};

export default Projects;
