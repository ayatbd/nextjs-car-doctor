import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const bookingCollection = dbConnect(collectionNameObject.bookingCollection);
  const result = await bookingCollection.insertOne(body);
  // console.log(body);
  return NextResponse.json(result);
};
