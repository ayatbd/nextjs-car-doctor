import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div>
        <div>
          <Image
            src="/public/assets/images/about_us/person.jpg"
            alt=""
            width={460}
            height={470}
          ></Image>
        </div>
        <div>
          <Image
            src="/public/assets/images/about_us/parts.jpg"
            alt=""
            width={327}
            height={332}
          ></Image>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutUs;
