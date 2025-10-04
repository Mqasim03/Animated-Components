import React, { useState } from 'react';

const SwitcherShowcase = () => {
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(0);
  const [active3, setActive3] = useState(0);
  const [active4, setActive4] = useState(0);
  const [active5, setActive5] = useState(0);

  const options4 = ['Home', 'About', 'Services', 'Contact'];
  const options5 = ['All', 'Active', 'Pending', 'Complete', 'Archive'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Modern Switcher Buttons</h1>
          <p className="text-purple-200">5 Different Styles with Smooth Animations</p>
        </div>

        {/* Version 1: Sliding Background - 4 Buttons */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">1. Sliding Background (4 Buttons)</h2>
          <div className="relative bg-slate-800/50 p-1.5 rounded-xl inline-flex">
            <div
              className="absolute top-1.5 bottom-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transition-all duration-300 ease-out"
              style={{
                left: `${active1 * 25 + 1.5}%`,
                width: 'calc(25% - 0.375rem)'
              }}
            />
            {options4.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setActive1(idx)}
                className={`relative z-10 px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  active1 === idx ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Version 2: Bubble Pop - 5 Buttons */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">2. Bubble Pop Effect (5 Buttons)</h2>
          <div className="inline-flex gap-2">
            {options5.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setActive2(idx)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                  active2 === idx 
                    ? 'text-white scale-110' 
                    : 'text-gray-400 hover:text-white scale-100'
                }`}
              >
                <span className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-500 ${
                  active2 === idx ? 'scale-100' : 'scale-0'
                }`} />
                <span className="relative z-10">{opt}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Version 3: Underline Animation - 4 Buttons */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">3. Sliding Underline (4 Buttons)</h2>
          <div className="relative inline-flex gap-8">
            {options4.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setActive3(idx)}
                className={`relative px-4 py-3 font-medium transition-all duration-300 ${
                  active3 === idx ? 'text-white' : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {opt}
                {active3 === idx && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Version 4: Glassmorphism Cards - 5 Buttons */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">4. Glassmorphism Cards (5 Buttons)</h2>
          <div className="flex flex-wrap gap-4">
            {options5.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setActive4(idx)}
                className={`px-6 py-4 rounded-xl font-medium transition-all duration-500 backdrop-blur-sm ${
                  active4 === idx
                    ? 'bg-white/25 text-white shadow-2xl shadow-purple-500/50 scale-105 border-2 border-white/40'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Version 5: Neon Glow - 4 Buttons */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">5. Neon Glow Effect (4 Buttons)</h2>
          <div className="inline-flex gap-4">
            {options4.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setActive5(idx)}
                className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                  active5 === idx
                    ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50 scale-105'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
                style={active5 === idx ? {
                  boxShadow: '0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.3)'
                } : {}}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Bonus: Vertical Switcher - 5 Buttons */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Bonus: Vertical Navigation (5 Buttons)</h2>
          <div className="relative inline-flex flex-col w-64">
            {options5.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setActive1(idx)}
                className={`relative z-10 px-6 py-4 text-left font-medium transition-all duration-300 rounded-lg ${
                  active1 === idx
                    ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/50 scale-105 my-1'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center justify-between">
                  {opt}
                  {active1 === idx && (
                    <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SwitcherShowcase;