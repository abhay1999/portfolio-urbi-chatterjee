interface SectionHeaderProps {
  id: string;
  title: string;
}

export function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <h2
        id={id}
        className="text-2xl md:text-3xl font-bold text-[#1a1a2e] tracking-tight"
      >
        {title}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full" style={{ background: "linear-gradient(to right, #4f46e5, #06b6d4)" }} />
    </div>
  );
}
