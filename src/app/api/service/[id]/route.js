import { NextResponse } from "next/server";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const p = await params;
  const servicessCollection = dbConnect(
    collectionNameObject.servicesCollection
  );
  const data = await servicessCollection.findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(data);
};
