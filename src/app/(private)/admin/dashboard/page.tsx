import React from "react";
import { UserButton } from "@clerk/nextjs";
import { getUserDataFromMongoDB } from "@/server-actions/users";

async function DashboardPage() {
  const mongoUserResponse = await getUserDataFromMongoDB();
  //if getting user data from MongoDB fails
  if (!mongoUserResponse?.success) {
    console.log(mongoUserResponse?.message);
  }
  return (
    <div className="p-5 flex-col gap-5">
      <h1>Dashboard Page</h1>
      <UserButton />
      <h1>UserID: {mongoUserResponse?.data?._id}</h1>
      <h1>Email: {mongoUserResponse?.data?.email}</h1>
    </div>
  );
}

export default DashboardPage;
