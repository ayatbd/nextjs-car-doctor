import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServicesSection = async () => {
  const serviceCollection = dbConnect(collectionNameObject.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-12 gap-5">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="col-span-4 w-full h-full border border-gray-400 p-6 rounded space-y-3"
          >
            <div className="flex items-center justify-center">
              <Image
                className="rounded"
                alt=""
                src={item.img}
                width={314}
                height={208}
              />
            </div>
            <h1 className="text-xl font-bold text-gray-700">{item.title}</h1>
            <p className="font-bold text-red-400 flex justify-between items-center">
              <span>Price: ${item.price}</span>
              <span className="hover:bg-gray-300 transition-all delay-75 p-1">
                <Link href={`/services/${item._id}`}>
                  <FaArrowRight />
                </Link>
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
