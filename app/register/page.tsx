// "use client";

import SignUpPage from "@/components/signup-form";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signUpSchema, SignUpInput } from "@/lib/auth-schema";
// import { signUpAction } from "@/app/actions/auth";
// import { useState } from "react";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
// import Link from "next/link";

// export default function SignUpPage() {
//   const [error, setError] = useState<string | null>(null);

//   const form = useForm<SignUpInput>({
//     resolver: zodResolver(signUpSchema),
//     defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
//   });

//   async function onSubmit(values: SignUpInput) {
//     setError(null);
//     const result = await signUpAction(values);
//     if (result?.error) setError(result.error);
//   }

//   return (
//     <div className="flex flex-col space-y-6 w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold">Daftar Akun</h1>
//         <p className="text-sm text-slate-500">
//           Mulai perjalananmu bersama kami hari ini.
//         </p>
//       </div>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Nama Lengkap</FormLabel>
//                 <FormControl>
//                   <Input placeholder="John Doe" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="john@example.com"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="••••••••" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="confirmPassword"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Konfirmasi</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="••••••••" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {error && (
//             <div className="p-3 bg-red-50 text-red-500 text-sm rounded-lg">
//               {error}
//             </div>
//           )}

//           <Button
//             type="submit"
//             className="w-full"
//             disabled={form.formState.isSubmitting}
//           >
//             {form.formState.isSubmitting ? (
//               <Loader2 className="animate-spin" />
//             ) : (
//               "Buat Akun"
//             )}
//           </Button>
//         </form>
//       </Form>

//       <p className="text-center text-sm text-slate-600">
//         Sudah punya akun?{" "}
//         <Link
//           href="/login"
//           className="text-blue-600 font-semibold hover:underline"
//         >
//           Masuk
//         </Link>
//       </p>
//     </div>
//   );
// }

// import { LoginForm } from "@/components/login-form"

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
        <SignUpPage />
      </div>
    </div>
  );
}
