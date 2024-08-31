import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { title, id, img, description, price } = service || {};

  return (
    <div className="card card-compact bg-base-100 w-[450px] shadow-xl">
      <figure>
        <Image src={img} height={100} width={500} alt="pic comming" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="">
          <div className="flex justify-between items-center">
            <p className="text-[#FF3811] font-bold text-2xl">Price: {price}</p>
            <button className="btn btn-ghost">
              <IoIosArrowRoundForward className="text-4xl text-[#FF3811]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
