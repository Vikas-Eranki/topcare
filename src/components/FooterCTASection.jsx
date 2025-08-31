import logo from "../assets/logo.png";
export default function FooterCTASection() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left - Logo & Tagline */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Topmind Care"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-gray-900 font-semibold text-lg">
              Topmind Care
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Mindfulness for growing minds. © 2025 Mindery Kids.
          </p>
        </div>

        {/* Center - Contact */}
        <div className="text-sm">
          <p className="text-gray-500 mb-1">Contact</p>
          <div className="flex gap-4">
            <a href="#" className="text-purple-600 hover:underline">
              Instagram
            </a>
            <a href="#" className="text-purple-600 hover:underline">
              YouTube
            </a>
            <a href="#" className="text-purple-600 hover:underline">
              X
            </a>
          </div>
        </div>

        {/* Right - Legal */}
        <div className="text-sm">
          <p className="text-gray-500 mb-1">Legal</p>
          <div className="flex gap-2">
            <a href="#" className="text-purple-600 hover:underline">
              Privacy
            </a>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-purple-600 hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
