const text = (
  <>
    <span className="italic">&ldquo;The measure of what we are is what we do with what we have.&rdquo;</span>
    <span className="not-italic font-normal text-indigo-400 ml-3">&mdash; Vince Lombardi</span>
  </>
);

export function QuoteBanner() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-violet-50 border-y border-indigo-100 py-3">
      <div className="animate-marquee text-sm text-indigo-700 font-medium tracking-wide">
        <span className="marquee-item">{text}</span>
        <span className="marquee-item" aria-hidden="true">{text}</span>
      </div>
    </div>
  );
}
