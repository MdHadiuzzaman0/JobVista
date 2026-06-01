import { ToastContainer } from "react-toastify";

export default function SeekerLayout({ children }) {
  return (
    <div className="min-h-screen bg-workable-bg font-body">
      <ToastContainer position="top-right" autoClose={1200} />
      <main className="container mx-auto px-6 pb-20">
        {children}
      </main>
    </div>
  );
}