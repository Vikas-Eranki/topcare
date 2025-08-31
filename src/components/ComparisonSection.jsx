import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function MinderyKids() {
  return (
    <section className="mx-auto px-6 py-12">
      {/* Comparison Table */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Why Choose Mindery Kids Over Others?
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-left text-sm md:text-base">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">Feature</th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Mindery Kids
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Other Apps
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                feature: "Child-Friendly Guided Meditations",
                mindery: "Story-based, fun & short",
                other: "Generic adult content",
              },
              {
                feature: "Safe & Ad-Free Environment",
                mindery: "100% secure for kids",
                other: "Ads & distractions",
              },
              {
                feature: "Age-Specific Programs",
                mindery: "Tailored for 4–14",
                other: "One-size-fits-all",
              },
              {
                feature: "Parent & Teacher Support",
                mindery: "Guides, printables, progress insights",
                other: "Limited or none",
              },
            ].map((row, idx) => (
              <motion.tr
                key={row.feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4">{row.feature}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <Check size={18} />
                    {row.mindery}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-red-500">
                    <X size={18} />
                    {row.other}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
