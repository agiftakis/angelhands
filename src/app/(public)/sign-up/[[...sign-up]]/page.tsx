import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return  (
    <div className="flex justify-center items-center min-h-screen py-5 
    bg-[url('/images/angelbak1.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <SignUp fallbackRedirectUrl="/admin/dashboard" />
      </div>
      );
}
