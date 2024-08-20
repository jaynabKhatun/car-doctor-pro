import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full ">
        {banner.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] bg-top bg-cover bg-no-repeat"
          >
            <div className="h-full w-full flex items-center pl-36 ">
              <div className="space-y-4">
                <h1 className="text-6xl text-white font-semibold">
                  {banner.title}
                </h1>
                <h1 className="text-white text-2xl">{banner.description}</h1>
                <button className="btn  text-white btn-primary  mr-4">Discover More</button>
                <button className="btn btn-outline   text-white  ">Latest Project</button>
              </div>
            </div>

            <Image alt="banner picture" src="" className="w-full" />

            <div className="absolute transform  flex justify-between bottom-12 right-12 gap-4">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle btn-primary text-white">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const banner = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
