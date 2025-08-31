import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // using an icon instead of +/-

export default function FAQSection() {
  const faqs = [
    {
      q: "What ages is this for?",
      a: "This program is designed for children ages 4 to 12, with content adapted for different age groups.",
    },
    {
      q: "How long are the sessions?",
      a: "Each session lasts around 5 to 10 minutes—short enough to keep kids engaged while being effective.",
    },
    {
      q: "Is it safe and ad-free?",
      a: "Yes. We designed this for children. No external ads, clear privacy options, and parent controls.",
    },
    {
      q: "Can schools use it?",
      a: "Absolutely! Many schools use our program in classrooms and group sessions to encourage mindfulness.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-6 py-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* FAQ List */}
      <div className="rounded-2xl border border-gray-200 divide-y divide-gray-100 bg-white shadow-sm overflow-hidden">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-4"
          >
            {/* Question */}
            <button
              className="w-full text-left font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.q}
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2 text-gray-500"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.p
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2 text-sm overflow-hidden"
                >
                  {faq.a}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 rounded-3xl p-8 bg-gradient-to-r from-purple-50 to-blue-50 shadow-sm"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Start Your Child’s Mindfulness Journey
        </h3>
        <p className="text-gray-600 mb-6">
          Try it free. Build calm, focus, and kindness—one small practice a day.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full text-white font-medium bg-purple-600 hover:bg-purple-700 transition"
          >
            Create Account
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full text-white font-medium bg-green-500 hover:bg-green-600 transition"
          >
            Download App
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
