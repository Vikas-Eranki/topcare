import { Button } from "@/components/ui/button";

const ParentHubSection = () => {
  const resources = [
    { label: "Download Starter Kit (PDF)", icon: "📄", href: "#" },
    { label: "7-Day Calm Plan", icon: "🗓️", href: "#" },
    { label: "Classroom Pack", icon: "📚", href: "#" },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="rounded-3xl shadow-xl py-8 px-5 mx-5 bg-gradient-to-r from-indigo-50 via-purple-50 to-cyan-50">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Parent & Teacher Hub
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Practical guides, printable routines, and progress insights so you can
          support mindfulness at home and school.
        </p>

        {/* Resource Buttons */}
        <div className="flex flex-wrap gap-4">
          {resources.map((res, index) => (
            <a
              key={index}
              href={res.href}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white border border-gray-200 shadow-sm text-sm font-medium text-purple-600 hover:bg-purple-50 transition"
            >
              {res.icon} {res.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentHubSection;
