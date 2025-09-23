"use client";
import MyBookingsTable from "@/components/tables/MyBookingsTable";
import React, { useEffect, useState } from "react";

const MyBookingPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch("http://localhost:3000/api/service");
      const data = await res.json();
      setBookings(data);
    };
    fetchBookings();
  }, []);
  return (
    <div>
      <MyBookingsTable bookings={bookings}></MyBookingsTable>
    </div>
  );
};

export default MyBookingPage;
