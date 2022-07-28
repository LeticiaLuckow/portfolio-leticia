import { ImgPerfil } from '../Contact/styles';
import { DivFlex, ImgName, NameP } from './styles';

const Header = () => {
  return (
    <>
      <DivFlex>
        <ImgName src="/leticiav.png" />
        <NameP>Letícia Villas Boas Luckow</NameP>
      </DivFlex>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImgPerfil src="/leticia-banner.png" alt="Foto Pessoal" />
      </div>
    </>
  );
};

export default Header;
