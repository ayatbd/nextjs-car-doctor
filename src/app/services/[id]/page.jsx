import Image from "next/image";

const page = async ({ params }) => {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
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
