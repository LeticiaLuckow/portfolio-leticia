import { DivAboutMe, DivInfo, DivSocialMedia, SpanSocialMedia } from './styles';

import { Linkedin, Github } from '@styled-icons/bootstrap';

const Summary = () => {
  return (
    <DivInfo id="sobre">
      <h1 style={{ marginRight: '50px' }}>Sobre</h1>

      <DivAboutMe>
        <p>
          Meu nome é Letícia, sou formada em Administração pela Universidade
          Positivo mas atualmente estudo programação para ingressar nessa área
          como desenvolvedora Front-End Junior.
        </p>
        <DivSocialMedia>
          <SpanSocialMedia>
            <a
              href="https://www.linkedin.com/in/leticia-luckow/"
              target="blank"
            >
              <Linkedin width={30} color="#097dea" />
            </a>
          </SpanSocialMedia>
          <SpanSocialMedia>
            <a href="https://github.com/LeticiaLuckow">
              <Github width={30} color="white" />
            </a>
          </SpanSocialMedia>
        </DivSocialMedia>
      </DivAboutMe>
    </DivInfo>
  );
};

export default Summary;
