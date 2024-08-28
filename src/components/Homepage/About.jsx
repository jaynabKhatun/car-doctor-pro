import personPic from "../../../public/assets/images/about_us/person.jpg";
import partsPic from "../../../public/assets/images/about_us/parts.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-40">
      <div className="grid grid-cols-1 gap-10  lg:grid-cols-2 ">
        <div className="relative">
          <div className="">
            <Image width={550} height={550}  src={personPic} alt="person pic" />
          </div>
          <div>
            <Image className="absolute bottom-6 right-16 top-32  border-white border-8" width={400} height={400} src={partsPic} alt="parts" />
          </div>
        </div>

        <div>
          <div className="space-y-4">
            <h3 className="text-[#FF3811] font-bold text-xl">About Us</h3>

            <h1 className="text-5xl font-extrabold w-96 ">We are qualified & of experience in this field</h1>
            <h2 className="w-[600px] text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.{" "}
            </h2>
            <h2 className="w-[600px]  text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </h2>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
