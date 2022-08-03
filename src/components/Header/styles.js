import styled from 'styled-components';

const DivFlex = styled.div`
  display: flex;
  background: #222222;
  top: 0;
  position: sticky;
  z-index: 1;
  justify-content: space-between;
  padding: 10px 6%;
`;

const ImgName = styled.img`
  width: 50px;
  display: flex;
`;

const MenuDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: white;
`;
const SpanDiv = styled.span`
  height: 100%;
  vertical-align: middle;
  display: flex;
  position: relative;
  font-family: 'Uchen', serif;

  align-items: center;
  &:hover {
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: rgb(207, 171, 177);
    transition: all 300ms ease-in-out;
  }
`;
export { ImgName, DivFlex, MenuDiv, SpanDiv };
