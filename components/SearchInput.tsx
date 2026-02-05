
import React, { useState } from 'react';

interface SearchInputProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, isLoading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="group relative flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto px-4"
    >
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400 group-focus-within:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="GitHub Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 text-white py-3.5 pl-11 pr-4 rounded-2xl text-base outline-none ring-0 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all placeholder:text-slate-500 shadow-2xl"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !username.trim()}
        className="relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-900 font-bold py-3.5 px-8 rounded-2xl text-base transition-all active:scale-95 shadow-lg shadow-emerald-500/20 flex items-center justify-center min-w-[120px]"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-[3px] border-slate-900 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
};

export default SearchInput;
