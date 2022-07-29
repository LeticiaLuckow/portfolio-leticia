import { ImgPerfil } from '../Contact/styles';
import { DivFlex, ImgName } from './styles';

const Header = () => {
  return (
    <>
      <DivFlex>
        <ImgName src="/leticiav.png" />
      </DivFlex>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#cfabb1',
        }}
      >
        <ImgPerfil src="/leticia-banner.png" alt="Foto Pessoal" />
      </div>
    </>
  );
};

export default Header;
