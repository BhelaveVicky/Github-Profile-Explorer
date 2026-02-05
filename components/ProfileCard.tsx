
import React from 'react';
import { GitHubUser } from '../types';

interface ProfileCardProps {
  user: GitHubUser;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="relative w-full max-w-md mx-auto group">
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-50 transition duration-1000 group-hover:opacity-75"></div>
      
      <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 p-8 sm:p-10 rounded-[2rem] shadow-2xl flex flex-col items-center text-center">
        {/* Avatar with Animated Border */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-slate-900 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* User Info */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-1">
            {user.name || user.login}
          </h2>
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">@{user.login}</p>
        </div>

        {/* Bio */}
        {user.bio ? (
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs font-medium italic">
            "{user.bio}"
          </p>
        ) : (
          <div className="h-4"></div>
        )}

        {/* Stats Grid - Modern Look */}
        <div className="grid grid-cols-3 gap-4 w-full mb-10">
          <div className="bg-slate-800/30 rounded-2xl p-3 border border-slate-700/30">
            <span className="block text-xl font-black text-white">{user.followers}</span>
            <span className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Followers</span>
          </div>
          <div className="bg-slate-800/30 rounded-2xl p-3 border border-slate-700/30">
            <span className="block text-xl font-black text-white">{user.following}</span>
            <span className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Following</span>
          </div>
          <div className="bg-slate-800/30 rounded-2xl p-3 border border-slate-700/30">
            <span className="block text-xl font-black text-white">{user.public_repos}</span>
            <span className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Repos</span>
          </div>
        </div>

        {/* Profile Link */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative inline-flex items-center justify-center w-full bg-slate-100 hover:bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl text-sm transition-all shadow-xl shadow-slate-100/5"
        >
          View Profile
          <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
