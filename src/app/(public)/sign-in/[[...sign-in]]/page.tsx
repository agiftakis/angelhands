import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex justify-center items-center min-h-screen py-5 
  bg-[url('/images/angelbak.png')] bg-cover bg-center bg-no-repeat bg-fixed">
    <SignIn fallbackRedirectUrl="/admin/dashboard" />
    </div>
    );
}
