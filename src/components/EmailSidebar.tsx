export default function EmailSidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 right-8 flex-col items-center gap-5 after:content-[''] after:w-px after:h-24 after:bg-slate">
      <a
        href="mailto:kapakayalamohan@gmail.com"
        className="font-mono text-xs text-slate hover:text-green hover:-translate-y-1 transition-all duration-200"
        style={{ writingMode: "vertical-rl" }}
      >
        kapakayalamohan@gmail.com
      </a>
    </div>
  );
}
