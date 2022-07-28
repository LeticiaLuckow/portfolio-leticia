import { ImgIcons, SkillCardDiv } from './styles.js';

const SkillsCard = ({ image, text }) => {
  return (
    <SkillCardDiv>
      <ImgIcons src={image}></ImgIcons>
      <span>{text}</span>
    </SkillCardDiv>
  );
};

export default SkillsCard;
