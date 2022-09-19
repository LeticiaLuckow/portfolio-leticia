import ProjectCard from '../ProjectCard';
import { ProjectDiv } from './styles';
import { Section } from '../Section/styles';

const Projects = () => {
  return (
    <Section id="projetos">
      <h1>Projetos</h1>
      <ProjectDiv>
        <ProjectCard
          link="https://github.com/LeticiaLuckow/Blog"
          linkProjeto="https://lvblog-leticialuckow.vercel.app/"
          image="/assets/blog.png"
          text="Lv Blog"
        />
        <ProjectCard
          link="https://github.com/LeticiaLuckow/glossario-react"
          linkProjeto="https://glossario-react.vercel.app/"
          image="/assets/glossario-react.png"
          text="Glossário"
        />
        <ProjectCard
          link="https://github.com/LeticiaLuckow/catalogo-filmes"
          linkProjeto="https://catalogo-filmes-blue.vercel.app/"
          image="/assets/site-movie-lu.png"
          text="MovieLu"
        />
        <ProjectCard
          link="https://github.com/LeticiaLuckow/to-do-list"
          linkProjeto="https://to-do-list-mu-three.vercel.app/"
          image="/assets/to-do-list.png"
          text="Lista de Atividades"
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
          link="https://github.com/LeticiaLuckow/Projeto-Infusion"
          image="/assets/projeto-infusion.png"
          text="Projeto Infusion"
        />
      </ProjectDiv>
    </Section>
  );
};

export default Projects;
