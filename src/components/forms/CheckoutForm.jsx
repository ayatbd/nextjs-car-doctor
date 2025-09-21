"use client";

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
const CheckoutForm = ({ data }) => {
  const { data: session } = useSession();

  const handleBookService = async (event) => {
    toast("Submit is processing...");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const number = form.number.value;
    const address = form.address.value;

    const bookingPayload = {
      customerName: name,
      email,
      date,
      address,
      price,
      number,
      service_id: data._id,
      service_name: data.title,
      service_img: data.img,
      service_price: data.price,
    };
    console.log(bookingPayload);
    const res = await fetch("http://localhost:3000/api/service", {
      method: "POST",
      body: JSON.stringify(bookingPayload),
    });
    const postedResponse = await res.json();
    console.log("posted Data", postedResponse);
  };
  return (
    <div className="flex items-center justify-center p-12">
      {/* Author: FormBold Team */}
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleBookService}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Name
                </label>
                <input
                  defaultValue={session?.user?.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                  text-base font-medium text-[#6B7280] outline-none 
                  focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                  text-base font-medium text-[#6B7280] outline-none 
                  focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email
                </label>
                <input
                  defaultValue={session?.user?.email}
                  type="email"
                  name="email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                  text-base font-medium text-[#6B7280] outline-none 
                  focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Due amount
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={data?.price}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                  text-base font-medium text-[#6B7280] outline-none 
                  focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                  text-base font-medium text-[#6B7280] outline-none 
                  focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Present Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                  text-base font-medium text-[#6B7280] outline-none 
                  focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] 
              py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
