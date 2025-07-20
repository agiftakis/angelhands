import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="mt-5 mb-5 flex justify-center items-center h-sc">
    <SignIn fallbackRedirectUrl="/admin/dashboard" />
    </div>
    );
}
