'use client'
import { usePathname } from "next/navigation";
import PublicLayout from "./public";
import PrivateLayout from "./private";


function CustomLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPrivateRoute = pathname.includes("/admin");
    
    if(isPrivateRoute){
        return <PrivateLayout>
           {children}
        </PrivateLayout>
    } 

  return <PublicLayout>
    {children}
  </PublicLayout>
}

export default CustomLayout;
