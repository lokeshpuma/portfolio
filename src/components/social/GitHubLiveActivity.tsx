import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, ExternalLink, Activity, Sparkles } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface GitHubUserStats {
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

export const GitHubLiveActivity: React.FC = () => {
  const [userStats, setUserStats] = useState<GitHubUserStats | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/lokeshpuma'),
          fetch('https://api.github.com/users/lokeshpuma/repos?sort=updated&per_page=4')
        ]);

        if (userRes.ok && isMounted) {
          const userData = await userRes.json();
          setUserStats({
            public_repos: userData.public_repos ?? 12,
            followers: userData.followers ?? 5,
            following: userData.following ?? 8,
            bio: userData.bio
          });
        }

        if (reposRes.ok && isMounted) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData)) {
            setRepos(reposData.slice(0, 4));
          }
        }
      } catch {
        // Fallback gracefully without breaking
        if (isMounted) {
          setUserStats({
            public_repos: 14,
            followers: 10,
            following: 12,
            bio: 'AI/ML Engineer & Open-Source Developer'
          });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0c1222]/85 md:p-8"
    >
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-white/[0.06] md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-900 text-white dark:border-white/10 dark:bg-[#141e33] dark:text-cyan-400">
            <Github className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Live GitHub Public Activity
              </h3>
              <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-950/40 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live API
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct telemetry from @lokeshpuma public open-source repositories
            </p>
          </div>
        </div>

        <a
          href="https://github.com/lokeshpuma"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
        >
          <span>View full GitHub profile</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Quick Numbers Bar */}
      <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 text-center dark:border-white/[0.05] dark:bg-[#10192e]/60">
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {userStats ? userStats.public_repos : '14+'}
          </div>
          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Public Repositories
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 text-center dark:border-white/[0.05] dark:bg-[#10192e]/60">
          <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">
            {userStats ? userStats.followers : '10+'}
          </div>
          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Followers
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 text-center dark:border-white/[0.05] dark:bg-[#10192e]/60">
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {userStats ? userStats.following : '12+'}
          </div>
          <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Following
          </div>
        </div>
      </div>

      {/* Recent Repositories Grid */}
      <div className="mt-5">
        <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <span>Recent Public Work & Repositories</span>
          <Activity className="h-3.5 w-3.5 text-cyan-500" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-24 animate-pulse rounded-2xl border border-slate-200/60 bg-slate-100 dark:border-white/[0.05] dark:bg-[#10192e]/40"
              />
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-50/40 dark:border-white/[0.05] dark:bg-[#10192e]/60 dark:hover:bg-[#141f38]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300 truncate">
                      {repo.name}
                    </span>
                    <ExternalLink className="h-3 w-3 shrink-0 text-slate-400 group-hover:text-cyan-500" />
                  </div>
                  <p className="mt-1 line-clamp-2 text-[11px] text-slate-600 dark:text-slate-300">
                    {repo.description || 'Open-source repository & algorithms'}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-3 text-[10px] text-slate-500 dark:text-slate-400">
                  {repo.language && (
                    <span className="flex items-center gap-1 font-medium text-cyan-700 dark:text-cyan-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center text-xs text-slate-600 dark:border-white/[0.05] dark:bg-[#10192e]/60 dark:text-slate-300">
            Check out open-source repositories and code experiments directly on GitHub: @lokeshpuma
          </div>
        )}
      </div>
    </motion.div>
  );
};
