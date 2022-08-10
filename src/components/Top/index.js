import { ArrowUpCircle } from '@styled-icons/bootstrap';
import { TopDiv } from './styles';

const Top = () => {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <TopDiv>
      <ArrowUpCircle
        width={30}
        color="rgb(249 170 221)"
        onClick={ScrollToTop}
      />
    </TopDiv>
  );
};

export default Top;
