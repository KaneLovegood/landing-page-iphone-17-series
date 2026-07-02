export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-[12px] text-zinc-400 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-8">

        <div className="font-bold text-[14px] text-zinc-200 tracking-wider">
          Apple
        </div>

        <hr className="border-zinc-900" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:underline hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:underline hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:underline hover:text-white transition-colors">Sales and Refunds</a>
            <a href="#" className="hover:underline hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:underline hover:text-white transition-colors">Site Map</a>
          </div>

          <div>
            Copyright © 2024 Apple Inc. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
