import MyBookingsTable from "@/components/tables/MyBookingsTable";
import { headers } from "next/headers";

const fetchBookings = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: await headers(),
  });
  const data = await res.json();
  return data;
};
const MyBookingPage = async () => {
  const data = await fetchBookings();
  console.log(data);
  return (
    <div>
      <MyBookingsTable data={data}></MyBookingsTable>
    </div>
  );
};

export default MyBookingPage;
