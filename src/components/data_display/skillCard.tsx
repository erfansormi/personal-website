import React from "react";
import Image from "next/image";

// mantine
import { Badge } from "@mantine/core";

interface Props {
  title: string;
  image: string;
  level: string;
}

const SkillCard = ({ image, level, title }: Props) => {
  return (
    <div className="relative shadow-md bg-light-400 dark:bg-dark-700 p-4 rounded-md h-32 flex items-center">
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between w-full">
        {/* image */}
        <div>
          <Image
            width={56}
            height={56}
            alt={title}
            src={image}
            className="object-contain rounded-md"
          />
        </div>

        {/* title */}
        <div>
          <h4 className="text-base text-[0.9rem] font-medium">{title}</h4>
        </div>

        {/* level */}
        <span className="absolute end-0 -top-3">
          <Badge variant="filled" className="text-[0.55rem]" fw={"normal"} radius="sm">
            {level}
          </Badge>
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
