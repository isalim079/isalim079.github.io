import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:ml-[280px]">
        <div className="mx-auto max-w-content px-5 sm:px-8 md:px-12 lg:px-16 pt-24 lg:pt-0">
          {children}
        </div>
      </main>
    </div>
  );
}
