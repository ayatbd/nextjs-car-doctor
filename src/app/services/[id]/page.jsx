import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const page = async ({ params }) => {
  const p = await params;
  const servicessCollection = dbConnect(
    collectionNameObject.servicesCollection
  );
  const data = await servicessCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div>
      <div>
        <Image
          src={"/assets/images/checkout/checkout.png"}
          width={1130}
          height={300}
          alt=""
        />
      </div>
    </div>
  );
};

export default page;
