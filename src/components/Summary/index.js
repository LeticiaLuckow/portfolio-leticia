import { BgBlack, DivAboutMe, DivInfo } from './styles';

const Summary = () => {
  return (
    <DivInfo>
      <h1 style={{ marginRight: '50px' }}>Sobre</h1>
      <DivAboutMe>
        <p>
          Meu nome é Letícia, sou formada em Administração pela Universidade
          Positivo mas atualmente estudo programação para ingressar nesse área
          como desenvolvedora Front-End Junior.
        </p>
      </DivAboutMe>
    </DivInfo>
  );
};

export default Summary;
