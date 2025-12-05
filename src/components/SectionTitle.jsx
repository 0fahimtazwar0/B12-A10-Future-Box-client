import React from "react";
import { SparklesText } from "/src/components/ui/sparkles-text";
import { ShineBorder } from "/src/components/ui/shine-border";
import { AuroraText } from "/src/components/ui/aurora-text";
import Card from "./Card/Card";

const SectionTitle = ({ children }) => {
  return (
    <div className='relative px-5 py-2.5 rounded-full'>
      <SparklesText className='font-heading section-heading font-light'>
        <AuroraText>{children}</AuroraText>
      </SparklesText>
      <div className='relative w-full'>
        <hr className='mt-2 border' />
        <ShineBorder
          shineColor={["#7928CA", "#daaa63", "#e29a3f", "#FE8BBB"]}
        />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default SectionTitle;
