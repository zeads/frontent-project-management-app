import { LoginForm } from "@/components/login-form";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Link href="/" className="fixed top-5 left-5">
        <X className="fixed top-5 right-5" />
      </Link>
      <Image
        src="/logo.png"
        width={300}
        height={300}
        alt="Logo"
        className="p-2"
      />
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
