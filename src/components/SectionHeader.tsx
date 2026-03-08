interface SectionHeaderProps {
  id: string;
  title: string;
}

export function SectionHeader({ id, title }: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold text-[#1a1a2e] mb-6 border-b-2 border-[#b71c1c] pb-2 w-fit"
    >
      {title}
    </h2>
  );
}
