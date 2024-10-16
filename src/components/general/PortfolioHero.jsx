import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import headshot from "../../images/heashot1.jpeg";
const PortfolioHero = () => {
  return (
    <HeroHighlight>
      <div className="container mx-auto min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 py-20">
          {/* Profile Image Section with Frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-80" />

              {/* Image Wrapper */}
              <div className="relative bg-white dark:bg-neutral-900 p-3 rounded-2xl">
                <div className="aspect-square rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    // src="/api/placeholder/800/800"
                    src={headshot}
                    alt="Professional headshot"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/4 -left-4 w-24 h-24 bg-blue-500 rounded-full blur-lg opacity-20" />
              <div className="absolute -z-10 bottom-1/4 -right-4 w-24 h-24 bg-purple-500 rounded-full blur-lg opacity-20" />

              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
            </div>

            {/* Experience Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white dark:bg-neutral-800 px-6 py-3 rounded-2xl shadow-lg"
            >
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                Full Stack Developer
              </p>
              <p className="text-2xl font-bold text-blue-600">5+ Years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-8 -left-8 bg-white dark:bg-neutral-800 px-6 py-3 rounded-2xl shadow-lg"
            >
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                Projects Delivered
              </p>
              <p className="text-2xl font-bold text-purple-600">50+</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-medium text-blue-600 dark:text-blue-400"
              >
                Hello, I&apos;m a
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-800 dark:text-white leading-tight"
              >
                Full Stack
                <br />
                <Highlight className="text-black dark:text-white">
                  Developer
                </Highlight>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed"
            >
              Transforming ideas into elegant, scalable solutions. Specializing
              in modern web technologies and cloud architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 text-lg font-medium"
              >
                Let&apos;s Talk
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-lg font-medium"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-6 pt-6"
            >
              <a
                href="https://github.com"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-all hover:scale-110 transform"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-all hover:scale-110 transform"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:your@email.com"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-all hover:scale-110 transform"
              >
                <Mail size={28} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default PortfolioHero;
