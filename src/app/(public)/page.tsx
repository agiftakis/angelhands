import React from "react";
import Link from "next/link";
import Image from "next/image"; // Make sure this import is present

function Homepage() {
  return (
    <div className="p-3">
      <div className="flex justify-between items-center p-5 bg-[#26d5d2]">

        {/* Left section: Image and ANGEL HANDS text */}
        <div className="flex items-center gap-2"> {/* This div aligns the image and text horizontally */}
          <Image
            src="/images/peachtree-doves.png" 
            alt="Peachtree Doves Logo"       
            width={75}                       
            height={75}                     
            priority={true}               
          />
          <Link href='/' className="font-bold text-lg">
            ANGEL HANDS
          </Link>
        </div>

        {/* Right section: Sign-in link */}
        <Link href='/sign-in' className="text-[#000808] text-sm underline">Sign-in</Link>
      </div>
         <div className="grid grid-cols-1 md:grid-cols-2"></div>        

    </div>
  );
}

export default Homepage;