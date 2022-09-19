import SkillsCard from '../../SkillsCard';
import { Section } from '../Section/styles';
import { DivIcons } from './styles';

const Skills = () => {
  return (
    <Section id="habilidades">
      <h1>Habilidades</h1>

      <DivIcons>
        <SkillsCard image="html.png" text="HTML" />
        <SkillsCard image="css.png" text="CSS" />
        <SkillsCard image="javascript.png" text="JavaScript" />
        <SkillsCard image="typescript.png" text="Typescript" />
        <SkillsCard image="react.png" text="React" />
        <SkillsCard image="nextjs.png" text="Next.Js" />
        <SkillsCard image="styled components.png" text="Styled Components" />
      </DivIcons>
    </Section>
  );
};

export default Skills;
