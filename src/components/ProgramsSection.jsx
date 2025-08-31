import littleExplorersImg from "../assets/little-explorers.jpg";
import braveThinkersImg from "../assets/brave-thinkers.jpg";
import calmMindfulImg from "../assets/calm-mindful.jpg";

const programs = [
  {
    title: "Little Explorers (4–6)",
    desc: "Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.",
    img: littleExplorersImg,
    tags: [
      { icon: "🧸", text: "Cozy Corner" },
      { icon: "🎵", text: "Calm Music" },
      { icon: "🏅", text: "Sticker Badges" },
    ],
  },
  {
    title: "Brave Thinkers (7–9)",
    desc: "Longer adventures that build focus, self-confidence, and emotional awareness through guided play and mindful stories.",
    img: braveThinkersImg,
    tags: [
      { icon: "📖", text: "Mindful Stories" },
      { icon: "🧘", text: "Focus Games" },
      { icon: "🌟", text: "Confidence Boost" },
    ],
  },
  {
    title: "Calm & Mindful (10–12)",
    desc: "Mindful practices and music designed for pre-teens to manage stress, build empathy, and develop lifelong habits.",
    img: calmMindfulImg,
    tags: [
      { icon: "🎶", text: "Relax Music" },
      { icon: "🤝", text: "Empathy Builder" },
      { icon: "📊", text: "Growth Tracker" },
    ],
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-16 px-6 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Programs for Every Age
        </h2>
        <p className="text-lg text-gray-600">
          Pick a track or mix and match. Each program grows with your child.
        </p>
      </div>

      <div className="space-y-16">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={program.img}
                alt={program.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {program.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium shadow-sm"
                  >
                    {tag.icon} {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
