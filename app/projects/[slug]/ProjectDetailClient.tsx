"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white">
      <Header />

      <div className="pt-24 pb-16">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="max-w-4xl mx-auto">
              {project.featured && (
                <span className="inline-block px-2 py-1 rounded-md text-xs font-semibold bg-indigo-600 text-white mb-3">
                  Featured Project
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                {project.title}
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  About this project
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Technical Details
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-6"
            >
              {/* Links */}
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                  Links
                </h3>
                <div className="space-y-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gray-900 dark:bg-white/10 text-white text-sm font-semibold hover:bg-gray-800 dark:hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Tech stack */}
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-sm font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
