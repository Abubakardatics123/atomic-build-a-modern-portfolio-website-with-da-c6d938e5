"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover links overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/90 text-gray-900 text-xs font-semibold hover:bg-white transition-colors"
            aria-label={"View live demo of " + project.title}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-900/90 text-white text-xs font-semibold hover:bg-gray-900 transition-colors"
            aria-label={"View GitHub repo for " + project.title}
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>

        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 rounded-md text-xs font-semibold bg-indigo-600 text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/10">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              aria-label="Live site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <Link
            href={"/projects/" + project.slug}
            className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all"
          >
            Details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
