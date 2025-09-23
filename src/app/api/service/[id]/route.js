import { NextResponse } from "next/server";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export const DELETE = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect(collectionNameObject.bookingCollection);
  const query = { _id: new ObjectId(p.id) };

  // session for validation
  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOK = session?.user?.email == currentBooking.email;

  if (isOwnerOK) {
    // Delete user's specific booking
    const deleteResponse = await bookingCollection.deleteOne(query);
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json(
      { success: false, message: "Forbidden action" },
      { status: 401 }
    );
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const servicessCollection = dbConnect(
    collectionNameObject.servicesCollection
  );
  const data = await servicessCollection.findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(data);
};
