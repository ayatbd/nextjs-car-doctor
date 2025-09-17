"use server";

import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNameObject.userCollection);
  const user = await userCollection.findOne({ email });
  if (!user) return null;
  // const isPasswordOK = bcrypt.compare(user.password, password);
  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) return null;

  return user;
};
