import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import Image from "next/image";

const ServicesSection = async () => {
  const serviceCollection = dbConnect(collectionNameObject.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-12 gap-5">
      {data.map((item) => {
        return (
          <div key={item._id} className="col-span-4">
            <Image alt="" src={item.img} width={300} height={200} />
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
