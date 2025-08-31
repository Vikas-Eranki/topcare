const testimonials = [
  {
    text: "Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.",
    author: "Priya, Mom of 6-year-old",
  },
  {
    text: "The 5-minute ‘reset’ before homework has been a game changer for focus.",
    author: "Ravi, Dad of 10-year-old",
  },
  {
    text: "Our class uses the breathing games after lunch. Kids come back calm and ready.",
    author: "Anika, Grade 4 Teacher",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        What Families Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 shadow-sm bg-white p-6 hover:shadow-md transition"
          >
            <p className="text-yellow-500 text-lg mb-3">★★★★★</p>
            <p className="text-gray-800 mb-4">“{t.text}”</p>
            <p className="text-gray-600 text-sm font-medium">— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
