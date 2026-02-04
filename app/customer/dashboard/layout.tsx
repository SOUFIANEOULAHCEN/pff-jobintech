import AppSidebar from "@/components/dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}
