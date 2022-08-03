import styled, { keyframes } from 'styled-components';

const MoveUpDown = keyframes`
 
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`;
const FooterBoxDiv = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  text-decoration: none;
  &:hover {
    svg{animation: 0.6s linear 0s infinite alternate none running ${MoveUpDown};}
    
    }
  }
`;
const SpanTitle = styled.span`
  text-decoration: none;
  font-weight: bold;
  margin: 12px 0px;
`;
const SpanSubtitle = styled.span`
  text-decoration: none;
  color: #222222;
`;

export { FooterBoxDiv, SpanTitle, SpanSubtitle };
