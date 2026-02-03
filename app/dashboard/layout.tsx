import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-50/50">
        <AppSidebar />

        <main className="flex-1 overflow-auto">
          {/* Header untuk Mobile & Desktop */}
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
            <SidebarTrigger className="text-slate-600" />
            <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block" />
            <h1 className="text-sm font-medium text-slate-500">Overview</h1>
          </header>

          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
