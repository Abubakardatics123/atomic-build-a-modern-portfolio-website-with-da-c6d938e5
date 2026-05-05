"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillBadge from "@/components/ui/SkillBadge";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Frontend: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
  Backend: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
  "Tools & DevOps": "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 mb-4">
              Tech Stack
            </span>
            <h2 className="section-heading">
              Skills &{" "}
              <span className="text-gradient">Technologies</span>
            </h2>
            <p className="section-subheading mx-auto">
              A curated set of tools and technologies I use to build modern, scalable applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {skills.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 0.1}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={"inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border " + (categoryColors[group.category] || "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20")}>
                    {group.category}
                  </span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {group.items.map((skill, i) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={groupIndex * 6 + i}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Always learning and expanding my toolkit.{" "}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Let&apos;s build something together →
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
