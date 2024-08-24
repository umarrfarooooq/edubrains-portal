import React from "react";
import Avatar from "@public/avatarrr.jpg"
import Image from "next/image";

const AvatarComponent = ({width, height}) => {
  return (
    <div>
      <Image
        src={Avatar}
        alt="Avatar profile"
        className={`${width ? width : "w-[7.5rem]"} ${height ? height : "h-[7.5rem]"} object-cover object-top rounded-full border border-[#A9A9A9]`}
      />
    </div>
  );
};

export default AvatarComponent;
