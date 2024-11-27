import React from 'react';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] '>
      <h1 className='heading text-center text-3xl font-bold text-white'>
        EDUCATON & <span className='text-yellow-400'>SKILL</span>
      </h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div>
            <SkillsLanguage skill1="html" skill2="css" skill3="typescript" level1="w-[90%]" level2="w-[75%]" level3="w-[90%]"/>
        </div>
        <div>
            <SkillsLanguage skill1="React Js" skill2="Next Js" skill3="Tailwind Css" level1="w-[80%]" level2="w-[70%]" level3="w-[70%]"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
