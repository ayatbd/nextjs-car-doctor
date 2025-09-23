import DeleteBookingButton from "@/app/my-bookings/components/DeleteBookingButton";
import Image from "next/image";

const MyBookingsTable = ({ bookings }) => {
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
            {bookings.map((singleBooking) => {
              return (
                <tr key={singleBooking._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle">
                          <Image
                            width={48}
                            height={48}
                            src={singleBooking.service_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{singleBooking.service_name}</td>
                  <td>{singleBooking.service_name}</td>
                  <td>{singleBooking.service_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </th>
                  <DeleteBookingButton></DeleteBookingButton>
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
