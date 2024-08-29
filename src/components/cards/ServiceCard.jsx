import Image from "next/image";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { title, id, img, description } = service || {};

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={img} height={120} width={120} alt="pic comming" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
