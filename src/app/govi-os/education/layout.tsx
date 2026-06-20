import GoviOSNav from '@/components/govi-os/GoviOSNav';

export default function GoviOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#05070A] text-white">
      <GoviOSNav />
      {children}
    </div>
  );
}
