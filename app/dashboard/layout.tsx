import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen flex">
      <AppSidebar />
      <div className="overflow-y-auto lg:w-[89%] w-full">
        {children}
      </div>
    </main>
  );
}
