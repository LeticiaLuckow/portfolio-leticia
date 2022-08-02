import styled from 'styled-components';

const DivFlex = styled.div`
  display: flex;
  background: #222222;
`;

const ImgName = styled.img`
  margin: 10px;
  width: 50px;
  display: flex;
`;

const ImgPerfil = styled.img`
  width: 100%;
  display: flex;
  justify-content: center;
  clip-path: polygon(0 9%, 100% 0, 100% 90%, 0% 100%);
`;
export { ImgName, DivFlex, ImgPerfil };
