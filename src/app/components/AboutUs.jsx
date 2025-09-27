import Image from "next/image";
import React from "react";

const AboutUs = () => {
  // <div className="flex items-center justify-center">
  //   <div className="flex-1">
  //     <div className="absolute">
  //       <Image
  //         src="/assets/images/about_us/person.jpg"
  //         alt=""
  //         width={460}
  //         height={470}
  //       ></Image>
  //     </div>
  //     <div className="relative z-50 bg-white p-2 rounded-xl">
  //       <Image
  //         src="/assets/images/about_us/parts.jpg"
  //         alt=""
  //         width={327}
  //         height={332}
  //       ></Image>
  //     </div>
  //   </div>
  //   <div></div>
  // </div>
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
      <div className="grid md:grid-cols-2 items-center gap-28">
        {/* Left Side Images */}
        <div className="flex flex-col gap-6 overflow-hidden">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt=""
            width={460}
            height={470}
            className="rounded-lg shadow-md absolute"
          />
          <Image
            src="/assets/images/about_us/parts.jpg"
            alt=""
            width={327}
            height={332}
            className="rounded-lg shadow-md relative"
          />
        </div>

        {/* Right Side Content */}
        <div className="overflow-hidden">
          <p className="text-red-600 font-semibold mb-2">About Us</p>
          <h2 className="text-3xl font-extrabold text-gray-900 leading-snug mb-4">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <p className="text-gray-600 mb-3">
            There Are Many Variations Of Passages Of Lorem Ipsum Available, But
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomised Words Which Don&apos;t Look Even Slightly
            Believable.
          </p>
          <p className="text-gray-600 mb-6">
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomised Words Which Don&apos;t Look Even Slightly
            Believable.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
            Get More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
