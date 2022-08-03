import { MenuDiv } from './styles';
import { DivFlex, ImgName, SpanDiv } from './styles';

const Header = () => {
  return (
    <DivFlex>
      <ImgName src="/leticiav.png" />

      <MenuDiv>
        <SpanDiv>Sobre</SpanDiv>
        <SpanDiv>Habilidades</SpanDiv>
        <SpanDiv>Projetos</SpanDiv>
        <SpanDiv>Contato</SpanDiv>
      </MenuDiv>
    </DivFlex>
  );
};

export default Header;
