'use client'
import { usePathname } from "next/navigation";
import React from "react";

function CustomLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPrivateRoute = pathname.includes("/admin");
  return <div>CustomLayout</div>;
}

export default CustomLayout;
