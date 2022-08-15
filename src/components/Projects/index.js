import ProjectCard from '../ProjectCard';
import { ProjectDiv } from './styles';
import { Section } from '../Section/styles';

const Projects = () => {
  return (
    <Section id="projetos">
      <h1>Projetoss</h1>
      <ProjectDiv>
        <ProjectCard
          link="https://github.com/LeticiaLuckow/catalogo-filmes"
          image="/assets/site-movie-lu.png"
          text="MovieLu"
        />
        <ProjectCard
          link="https://github.com/LeticiaLuckow/Projeto-Landing-Page"
          image="/assets/landing-page.png"
          text="Landing Page"
        />
        <ProjectCard
          link="https://github.com/LeticiaLuckow/Projeto-PicPro"
          image="/assets/projeto-picpro.png"
          text="Projeto PicPro"
        />
        <ProjectCard
          link="https://github.com/LeticiaLuckow/to-do-list"
          image="/assets/to-do-list.png"
          text="Lista de Atividades"
        />
        <ProjectCard
          link="https://github.com/LeticiaLuckow/to-do-list"
          image="/assets/projeto-infusion.png"
          text="Projeto Infusion"
        />
      </ProjectDiv>
    </Section>
  );
};

export default Projects;
