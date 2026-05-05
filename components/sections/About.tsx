"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Download } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 mb-4">
              About Me
            </span>
            <h2 className="section-heading">
              Passionate about{" "}
              <span className="text-gradient">great software</span>
            </h2>
            <p className="section-subheading mx-auto">
              A little bit about who I am, what I do, and what drives me.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-full lg:h-96">
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 rotate-3 opacity-20" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 -rotate-3 opacity-10" />
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-indigo-500/20"
                />
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 z-20 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Open to work
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content side */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    {personalInfo.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-indigo-500" />
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={personalInfo.resume}
                  className="btn-primary"
                  download
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
