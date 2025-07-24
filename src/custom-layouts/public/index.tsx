import React from "react";
import Link from "next/link";
import Image from "next/image"; // Make sure this import is present
import { usePathname } from "next/navigation";

function PublicLayout({ children }: { children: React.ReactNode }) {
    const pathname=usePathname();
    const isAuthRoute =pathname.includes("/sign");
  return (
    <div>
        {!isAuthRoute && (
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
        )}
      {children}
    </div>
  );
}

export default PublicLayout;
