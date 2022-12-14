import { Whatsapp } from '@styled-icons/bootstrap';
import { LocationOn, Mail } from '@styled-icons/material-outlined';
import FooterBox from '../FooterBox';
import { ContactDiv, DivInfo, MediaContact } from './styles';

const Contact = () => {
  return (
    <ContactDiv>
      <DivInfo id="contato">
        <h1
          style={{ textAlign: 'center', width: '100%', marginBottom: '60px' }}
        >
          Contato
        </h1>
        <MediaContact>
          <FooterBox
            icon={<Whatsapp width={50} style={{ marginRight: '8px' }} />}
            title="Whatsapp"
            subtitle="(41) 9 9944-4862"
            link="https://wa.me/5541999444862"
          />
          <FooterBox
            icon={<Mail width={50} style={{ marginRight: '8px' }} />}
            title="E-mail"
            subtitle="leticia.villasboas99@gmail.com"
            link="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="blank"
          />
          <FooterBox
            icon={<LocationOn width={50} style={{ marginRight: '8px' }} />}
            title="Localização"
            subtitle="Curitiba-PR"
          />
        </MediaContact>
      </DivInfo>
    </ContactDiv>
  );
};

export default Contact;
