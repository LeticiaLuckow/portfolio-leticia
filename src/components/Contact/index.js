import { Whatsapp } from '@styled-icons/bootstrap';
import { LocationOn, Mail } from '@styled-icons/material-outlined';
import FooterBox from '../FooterBox';
import { ContactDiv, DivInfo } from './styles';

const Contact = () => {
  return (
    <ContactDiv>
      <DivInfo>
        <h1
          style={{ textAlign: 'center', width: '100%', marginBottom: '60px' }}
        >
          Contato
        </h1>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
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
            link="leticia.villasboas99@gmail.com"
          />
          <FooterBox
            icon={<LocationOn width={50} style={{ marginRight: '8px' }} />}
            title="Localização"
            subtitle="Curitiba-PR"
          />
        </div>
      </DivInfo>
    </ContactDiv>
  );
};

export default Contact;
