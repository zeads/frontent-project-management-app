import { LoginForm } from "@/components/login-form";
import { X } from "lucide-react";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Link href="/" className="fixed top-5 left-5">
        <X className="fixed top-5 right-5" />
      </Link>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
