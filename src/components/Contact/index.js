import { Github, Linkedin, Telephone } from '@styled-icons/bootstrap';
import { AlternateEmail } from '@styled-icons/material-outlined';
import { DivInfo, SpanInfo } from './styles';

const Contact = () => {
  return (
    <>
      <DivInfo>
        <h1>Contato</h1>

        <SpanInfo>
          <Telephone width={16} color="black" style={{ marginRight: '8px' }} />
          (41) 9 9944-4862
        </SpanInfo>

        <SpanInfo>
          <AlternateEmail
            width={16}
            color="black"
            style={{ marginRight: '8px' }}
          />
          leticia.villasboas99@gmail.com
        </SpanInfo>

        <SpanInfo>
          <a
            href="https://www.linkedin.com/in/let%C3%ADcia-luckow-355b64168/"
            target="blank"
          >
            <Linkedin width={16} color="black" style={{ marginRight: '8px' }} />
          </a>
          letícia-luckow
        </SpanInfo>
        <SpanInfo>
          <a href="https://github.com/LeticiaLuckow" target="blank">
            <Github width={16} color="black" style={{ marginRight: '8px' }} />
          </a>
          LeticiaLuckow
        </SpanInfo>

        <p>Curitiba- PR</p>
      </DivInfo>
    </>
  );
};

export default Contact;
