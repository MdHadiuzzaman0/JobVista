export default function SeekerLayout({ children }) {
  return (
    <div className="min-h-screen bg-workable-bg font-body">
      <main className="container mx-auto px-6 pb-20">
        {children}
      </main>
    </div>
  );
}