import { NextResponse } from "next/server";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache";

export const DELETE = async (req, { params }) => {
  const bookingCollection = dbConnect(collectionNameObject.bookingCollection);
  // const p = await params;
  const query = { _id: new ObjectId(params.id) };

  if (!params?.id || !ObjectId.isValid(params.id)) {
    return NextResponse.json(
      { success: false, message: "Invalid ID" },
      { status: 400 }
    );
  }

  // session for validation
  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOK = session?.user?.email == currentBooking.email;

  if (isOwnerOK) {
    // Delete user's specific booking
    const deleteResponse = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings");
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json(
      { success: false, message: "Forbidden action" },
      { status: 401 }
    );
  }
};

// export const DELETE = async (req, { params }) => {
//   try {
//     const { id } = params; // ✅ no await
//     const bookingCollection = dbConnect(collectionNameObject.bookingCollection);

//     if (!ObjectId.isValid(id)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid booking ID" },
//         { status: 400 }
//       );
//     }

//     const query = { _id: new ObjectId(id) };
//     console.log("Deleting booking:", id);

//     // session for validation
//     const session = await getServerSession(authOptions);
//     if (!session) {
//       return NextResponse.json(
//         { success: false, message: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const currentBooking = await bookingCollection.findOne(query);
//     if (!currentBooking) {
//       return NextResponse.json(
//         { success: false, message: "Booking not found" },
//         { status: 404 }
//       );
//     }

//     const isOwnerOK = session.user?.email === currentBooking.email;

//     if (!isOwnerOK) {
//       return NextResponse.json(
//         { success: false, message: "Forbidden action" },
//         { status: 403 } // ✅ better status
//       );
//     }

//     // Delete user's specific booking
//     const deleteResponse = await bookingCollection.deleteOne(query);
//     return NextResponse.json({ success: true, deleteResponse });
//   } catch (error) {
//     console.error("DELETE error:", error);
//     return NextResponse.json(
//       { success: false, message: "Server error" },
//       { status: 500 }
//     );
//   }
// };

export const GET = async (req, { params }) => {
  const p = await params;
  const servicessCollection = dbConnect(
    collectionNameObject.servicesCollection
  );
  const data = await servicessCollection.findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(data);
};
