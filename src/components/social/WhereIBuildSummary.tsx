import React from 'react';
import { motion } from 'framer-motion';
import { technicalWorkflowMapping } from '../../data/socialProfiles';
import { PlatformIcon } from '../common/PlatformIcon';
import { GlassCard } from '../common/GlassCard';
import { Layers } from 'lucide-react';

export const WhereIBuildSummary: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard className="p-6 md:p-8" enableTilt={false}>
        <div className="border-b border-white/10 pb-4 dark:border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Where I Build, Learn & Connect
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                A quick map of which platforms power each dimension of my technical journey
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technicalWorkflowMapping.map((item) => (
            <div
              key={item.action}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/40 p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/10 dark:border-white/[0.05] dark:bg-white/[0.02] dark:hover:bg-white/[0.05]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-bold text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-300">
                    {item.action}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {item.platforms.length} platform{item.platforms.length > 1 ? 's' : ''}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-slate-200/60 pt-3 dark:border-white/[0.05]">
                {item.platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/60 px-2.5 py-1 text-[11px] font-medium text-slate-700 backdrop-blur-md transition hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-cyan-500/15 dark:hover:text-cyan-300"
                  >
                    <PlatformIcon platformKey={p.icon} size={13} className="text-slate-500 group-hover:text-cyan-600 dark:text-slate-400 dark:group-hover:text-cyan-400" />
                    <span>{p.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
};
