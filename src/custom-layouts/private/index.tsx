import React, { useEffect } from "react";
import { message } from "antd";
import Link from "next/link";
import Image from "next/image";
import { IUser } from "@/interfaces";
import { getUserDataFromMongoDB } from "@/server-actions/users";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = React.useState<IUser | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  //get User Data
  const getUserData = async () => {
    try {
      setLoading(true);
      const response: any = await getUserDataFromMongoDB();
      //what to do after we receive user data
      if (response?.success) {
        setUserData(response.data);
      } else {
        message.error(response.message);
        setError(response.message);
      }
    } catch (error: any) {
      message.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  //update UserData- needs to run after component rendering
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center py-5 px-10 bg-[#26d5d2f0]">
        {/* Left section: Image and ANGEL HANDS text */}
        <div className="flex items-center gap-2">
          {" "}
          {/* This div aligns the image and text horizontally */}
          <Image
            src="/images/peachtree-doves.png"
            alt="Peachtree Doves Logo"
            width={75}
            height={75}
            priority={true}
          />
          <Link href="/" className="font-bold text-lg">
            ANGEL HANDS
          </Link>
        </div>
        {/* Right section: Sign-in link */}
        <Link href="/sign-in" className="text-[#000808] text-sm underline">
          Sign-in
        </Link>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
}

export default PrivateLayout;
