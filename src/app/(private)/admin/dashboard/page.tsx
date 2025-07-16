import React from "react";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

async function DashboardPage() {
  const user = await currentUser();
  console.log(user);
  return (
    <div className="p-5 flex-col gap-5">
      <h1>Dashboard Page</h1>
      <UserButton />
      <h1>
        UserID: {user?.id} | UserName: {user?.username}
      </h1>
      <h1>Email: {user?.emailAddresses[0].emailAddress}</h1>
    </div>
  );
}

export default DashboardPage;
