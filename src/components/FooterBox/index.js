import { FooterBoxDiv, SpanSubtitle, SpanTitle } from './styles';

const FooterBox = ({ icon, title, subtitle, link }) => {
  return (
    <FooterBoxDiv href={link}>
      {' '}
      {icon}
      <SpanTitle>{title}</SpanTitle>
      <SpanSubtitle>{subtitle}</SpanSubtitle>
    </FooterBoxDiv>
  );
};

export default FooterBox;
