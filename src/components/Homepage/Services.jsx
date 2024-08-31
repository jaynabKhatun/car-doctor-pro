
import ServiceCard from "../cards/ServiceCard";
import { service } from "../../lib/Service"

const Services = () => {
  console.log(service);
  return (
    <div className="mt-28">
      <div className="space-y-4 items-center flex justify-center flex-col text-center ">
        <h2 className="text-[#FF3811] font-bold text-xl">Service</h2>
        <h1 className="text-5xl font-extrabold">Our Service Area</h1>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
         
        </p>
      </div>

      <div className="gird grid-cols-1 lg:grid-cols-3 gap-6 mt-12 ">
       {
        service.map((service) => (
          <ServiceCard key={service._id} service={service} />  // map through services and render ServiceCard component for each service   
        ))
       }
      </div>
    </div>
  );
};

export default Services;
