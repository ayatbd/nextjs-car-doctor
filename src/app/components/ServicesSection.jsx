import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import Image from "next/image";

const ServicesSection = async () => {
  const serviceCollection = dbConnect(collectionNameObject.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-12 gap-5">
      {data.map((item) => {
        return (
          <div key={item._id} className="col-span-4 w-full h-full">
            <div className="flex items-center justify-center border p-5 w-full h-full">
              <Image
                className="rounded"
                alt=""
                src={item.img}
                width={314}
                height={208}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
