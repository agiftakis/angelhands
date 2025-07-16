import React from "react";
import {UserButton} from '@clerk/nextjs'
import { currentUser } from "@clerk/nextjs/server";

function DashboardPage() {
  return <div className='p-5 flex-col'>
    <h1>Dashboard Page</h1>
     <UserButton />
    </div>;
}

export default DashboardPage;
