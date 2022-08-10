import { MenuDiv } from './styles';
import { DivFlex, ImgName, SpanDiv } from './styles';

const Header = () => {
  return (
    <DivFlex>
      <ImgName src="/leticiav.png" />

      <MenuDiv>
        <SpanDiv>
          {' '}
          <a href="#sobre">Sobre</a>
        </SpanDiv>

        <SpanDiv>
          <a href="#habilidades">Habilidades </a>
        </SpanDiv>

        <SpanDiv>
          {' '}
          <a href="#projetos">Projetos</a>
        </SpanDiv>

        <SpanDiv>
          <a href="#contato">Contato</a>
        </SpanDiv>
      </MenuDiv>
    </DivFlex>
  );
};

export default Header;
