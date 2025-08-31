import { motion } from "framer-motion";

const features = [
  {
    title: "Ad-Free & Safe",
    description:
      "Child-first design with privacy controls and no external ads.",
  },
  {
    title: "Rewards that Motivate",
    description:
      "Stars, badges, and gentle streaks encourage healthy habits—no pressure.",
  },
  {
    title: "Offline Access",
    description: "Download favorite sessions for calm on the go.",
  },
  {
    title: "Sleep Mode",
    description:
      "Fade-out music and dim visuals help kids drift off peacefully.",
  },
  {
    title: "Classroom Friendly",
    description:
      "Teacher packs with 5-minute start-of-class resets and posters.",
  },
  {
    title: "Multi-Child Profiles",
    description: "Personalized tracks for each child in the family.",
  },
];

export default function FeaturesSections() {
  return (
    <section className="mx-auto px-6 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
        Built for Kids, Loved by Parents
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
