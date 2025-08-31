import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-child.jpg";
import FreeTrialPopup from "./Modal";

const features = [
  { icon: "🧠", label: "Improves", text: "Focus" },
  { icon: "😊", label: "Reduces", text: "Stress" },
  { icon: "💤", label: "Better", text: "Sleep" },
  { icon: "❤️", label: "Builds", text: "Empathy" },
];

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {/* Badge */}
              <motion.div
                className="bg-[#F4F3FF] p-2 w-fit mx-auto lg:mx-0 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs sm:text-sm font-bold text-[#3D00AF]">
                  🌈 Calm Minds, Happy Hearts
                </p>
              </motion.div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Mindfulness & <br className="hidden sm:block" />
                Meditation for Kids (4-14)
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Fun, story-based meditations that build focus, kindness, and
                confidence. Safe, ad-free, and crafted with child-development
                experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                variant="default"
                size="lg"
                className="hover:bg-white hover:border hover:border-[#895AF6] hover:text-[#895AF6] w-36 sm:w-auto"
                onClick={() => setIsOpen(true)}
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                className="font-semibold bg-green-500 hover:bg-white hover:border hover:border-green-400 hover:text-green-800 w-36 sm:w-auto"
              >
                Explore Programs
              </Button>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center bg-white rounded-2xl shadow-sm px-4 py-3 gap-3 w-full sm:w-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.label}
                    </p>
                    <h3 className="text-sm sm:text-lg font-semibold">
                      {item.text}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center overflow-hidden">
                <img
                  src={heroImage}
                  alt="Child practicing mindfulness meditation"
                  className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-2xl"
                />
              </div>
              {/* Decorative Blurs */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-16 sm:h-16 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      <FreeTrialPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default HeroSection;
