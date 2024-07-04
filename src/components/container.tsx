export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto bg-neutral-900 min-h-screen flex flex-col text-white">
      {children}
    </div>
  );
}
