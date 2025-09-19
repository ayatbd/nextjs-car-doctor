import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <div>
        <Image
          src={"/assets/images/checkout/checkout.png"}
          width={1130}
          height={300}
          alt=""
        />
        <p>Price: {data.price}</p>
        <Link href={`/checkout/${data._id}`}>Check Out</Link>
      </div>
    </div>
  );
};

export default page;
