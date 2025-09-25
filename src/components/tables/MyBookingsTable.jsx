"use client";
import DeleteBookingButton from "@/app/my-bookings/components/DeleteBookingButton";
import Image from "next/image";

const MyBookingsTable = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="text-center mb-4 font-bold">My all bookings</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle">
                          <Image
                            width={48}
                            height={48}
                            src={item.service_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.service_name}</td>
                  <td>{item.service_name}</td>
                  <td>{item.service_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </th>
                  <DeleteBookingButton id={item._id} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingsTable;
