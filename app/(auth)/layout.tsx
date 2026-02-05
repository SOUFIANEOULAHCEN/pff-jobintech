export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen flex">
      <div className="w-0 lg:w-[50%] h-full">
        <img src="./loginbg.png" className="w-full h-full object-cover" alt="signup image" />
      </div>
      <div className="overflow-y-auto lg:w-[89%] w-full font-vend-sans">
        {children}
      </div>
    </main>
  );
}
