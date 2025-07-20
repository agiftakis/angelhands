import React from "react";
import Link from "next/link";
import Image from "next/image"; // Make sure this import is present
import { Button } from "antd";

function Homepage() {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center py-5 px-10 bg-[#26d5d2]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="px-10 flex flex-col gap-7 justify-center">
          <h5 className="text-2xl font-bold text-[#26d5d2] mb-5">
            Welcome to Angel Hands HomeCare
          </h5>
          <p className="text-sm font-medium">
            At Angel hands your well-being and peace of mind are our highest
            priorities. We understand that inviting care into your home is a
            significant decision, and we are here to ensure it's one you feel
            confident about. We pride ourselves on a staff comprised of
            individuals who are not just skilled professionals, but also genuine
            souls filled with warmth and compassion. Each member of our team
            undergoes a rigorous selection process, ensuring they meet our
            exacting standards for expertise, empathy, and dedication.
          </p>
          {/* Separate paragraph tag */}
          <p className="text-sm font-medium mt-4">
            {/* Added mt-4 for extra spacing if needed */}
            We believe that exceptional care should be accessible to everyone,
            which is why we are committed to being a dependable and affordable
            solution. Be assured, Angel Hands is deeply committed to working
            alongside you every step of the way, offering unwavering support and
            understanding. Your comfort, dignity, and independence are paramount
            to us. Let us extend our Angel Hands to you, providing the
            dependable, compassionate care you deserve. We're more than just a
            home care agency; we're a supportive extension of your family, ready
            to assist with a helping hand.
          </p>
          <div className="flex gap-5">
            <Button>
              <Link href="/services" className="text-[#26d5d2]">
                View Services
              </Link>
            </Button>
            <Button type="primary">
              <Link href="/book-appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/homepage.png"
            alt="Peachtree homepage Logo"
            width={450}
            height={450}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
