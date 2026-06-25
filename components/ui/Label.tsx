export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.13em] uppercase text-accent mb-4">
      <span className="w-4 h-px bg-accent opacity-40" />
      {children}
    </div>
  );
}
