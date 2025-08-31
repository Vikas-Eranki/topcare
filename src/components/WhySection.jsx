const reasons = [
  {
    tag: "Story Meditations",
    title: "Guided Adventures",
    desc: "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
  },
  {
    tag: "Anytime Calm",
    title: "Tools for Big Feelings",
    desc: "Quick “reset” audios for anger, worry, pre-exam jitters, and bedtime battles.",
  },
  {
    tag: "Parent Hub",
    title: "Guides & Routines",
    desc: "Weekly tips, printable charts, and simple routines you can use at home or school.",
  },
];

export default function WhySection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0 mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Why Mindery Kids?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Children learn best through play and stories. Our sessions blend
          gentle breathing, guided imagery, and music to make mindfulness
          enjoyable and effective.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 text-left hover:shadow-md transition"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-900 text-xs sm:text-sm font-bold mb-4">
              {item.tag}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
