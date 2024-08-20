import React from "react";

const About = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>photo</div>
          <div>
            <div className="space-y-4">
              <h3>About Us</h3>
              <h1>We are qualified & of experience in this field</h1>
              <h2>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{" "}
              </h2>
              <h2>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </h2>
              <button className="btn btn-primary">Get More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
