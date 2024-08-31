import Image from "next/image";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { title, id, img, description } = service || {};

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={img} height={100} width={400} alt="pic comming" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
