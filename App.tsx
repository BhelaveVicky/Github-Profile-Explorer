
import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import ProfileCard from './components/ProfileCard';
import { fetchGitHubUser } from './services/githubService';
import { GitHubUser } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const userData = await fetchGitHubUser(username);
      if (userData) {
        setUser(userData);
      } else {
        setError('No such explorer found in the GitHub universe.');
        setUser(null);
      }
    } catch (err) {
      setError('Connection glitch. Try again later.');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-slate-200 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className={`relative z-10 flex flex-col items-center px-4 transition-all duration-1000 ease-in-out ${!user ? 'justify-center min-h-screen' : 'pt-20 pb-12'}`}>
        
        {/* Animated Header Section */}
        <header className={`w-full max-w-2xl text-center transition-all duration-700 ease-out ${user ? 'mb-12 transform -translate-y-2' : 'mb-0'}`}>
          <div className="inline-flex items-center justify-center mb-10 group">
            <div className="p-3 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-xl transition-transform group-hover:scale-110">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-white" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="ml-6 text-left">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
                Git<span className="text-emerald-500">Hub</span>
              </h1>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mt-1">Profile Explorer</p>
            </div>
          </div>

          <SearchInput onSearch={handleSearch} isLoading={isLoading} />
          
          {error && (
            <div className="mt-6 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl inline-block">
              <span className="text-red-400 text-sm font-bold flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                {error}
              </span>
            </div>
          )}
        </header>

        {/* Profile Result Display */}
        {user && (
          <main className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <ProfileCard user={user} />
          </main>
        )}

        {!user && !error && (
          <div className="fixed bottom-12 opacity-30 text-slate-500 flex items-center gap-4 group">
            <div className="h-px w-8 bg-slate-700"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black">Ready to search</span>
            <div className="h-px w-8 bg-slate-700"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
