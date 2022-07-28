import SkillsCard from '../../SkillsCard';
import { DivIcons } from './styles';

const Skills = () => {
  return (
    <>
      <h1>Habilidades</h1>

      <DivIcons>
        <SkillsCard image="html.png" text="HTML" />
        <SkillsCard image="css.png" text="CSS" />
        <SkillsCard image="javascript.png" text="JavaScript" />
        <SkillsCard image="react.png" text="React" />
        <SkillsCard image="styled components.png" text="Styled Components" />
      </DivIcons>
    </>
  );
};

export default Skills;
