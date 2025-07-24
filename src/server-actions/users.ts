"use server";

import UserModel from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server";

export const createUser = async () => {
  try {
    const user = await currentUser();
    const mongoDBUserObj = {
      name: `${user?.firstName} ${user?.lastName}`,
      clerkUserId: user?.id,
      email: user?.emailAddresses[0].emailAddress,
      profilePic: user?.imageUrl,
      isApproved: false,
      isSuperAdmin: false,
    };
    const newUser = new UserModel(mongoDBUserObj);
    await newUser.save();
    return {
      success: true,
      message: "User Created Successfuly",
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getUserDataFromMongoDB = async () =>{
    try {
        
    } catch (error:any) {
        return{
            success:false,
            message:error.message,
        }
    }

}
