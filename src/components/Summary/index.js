import { DivAboutMe, DivInfo, DivSocialMedia, SpanSocialMedia } from './styles';

import { Linkedin, Github } from '@styled-icons/bootstrap';

const Summary = () => {
  return (
    <DivInfo id="sobre">
      <h1 style={{ marginRight: '50px' }}>Sobre</h1>

      <DivAboutMe>
        <p>
          Realizei uma transição de carreira e hoje atuo como Desenvolvedora
          Frontend JR, com conhecimento no desenvolvimento de aplicações Web
          utilizando tecnologias como HTML5, CSS3, Javascript, React, entre
          outros...
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
