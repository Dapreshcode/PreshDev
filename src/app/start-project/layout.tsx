import Navbar from "@/component/layout/Navbar";


export default function StartProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar /> 

      <main className="min-h-screen bg-background">
        {children}
      </main>
    </>
  );
}