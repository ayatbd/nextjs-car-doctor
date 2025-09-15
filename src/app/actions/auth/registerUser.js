"use server";

import dbConnect, { collectionNameObject } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  console.log(payload);
  const userCollection = dbConnect(collectionNameObject.userCollection);

  // validation
  const { email, password } = payload;
  if (!email || !password) return { success: false };
  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const result = await userCollection.insertOne(payload);
    return result;
  }
  return { success: false };
};
