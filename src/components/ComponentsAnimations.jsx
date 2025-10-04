import React, { useState, useEffect } from 'react';

const UltimateComponentLibrary = () => {
  // States for all components
  const [switcher1, setSwitcher1] = useState(0);
  const [switcher2, setSwitcher2] = useState(0);
  const [switcher3, setSwitcher3] = useState(0);
  const [switcher4, setSwitcher4] = useState(0);
  
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  
  const [activeCard1, setActiveCard1] = useState(0);
  const [activeCard2, setActiveCard2] = useState(0);
  const [activeCard3, setActiveCard3] = useState(0);
  const [activeCard4, setActiveCard4] = useState(0);
  
  const [barValue1, setBarValue1] = useState(65);
  const [barValue2, setBarValue2] = useState(45);
  const [barValue3, setBarValue3] = useState(80);
  const [barValue4, setBarValue4] = useState(55);
  
  const [bannerVisible1, setBannerVisible1] = useState(true);
  const [bannerVisible2, setBannerVisible2] = useState(true);
  const [bannerVisible3, setBannerVisible3] = useState(true);
  const [bannerVisible4, setBannerVisible4] = useState(true);

  const switcherOptions = ['Design', 'Code', 'Test', 'Deploy'];
  const cards = [
    { title: 'Card 1', color: 'from-purple-500 to-pink-500', icon: '🚀' },
    { title: 'Card 2', color: 'from-blue-500 to-cyan-500', icon: '⚡' },
    { title: 'Card 3', color: 'from-green-500 to-emerald-500', icon: '🎯' },
    { title: 'Card 4', color: 'from-orange-500 to-red-500', icon: '🔥' }
  ];

  // Auto progress animations
  useEffect(() => {
    const interval1 = setInterval(() => {
      setProgress1(p => (p >= 100 ? 0 : p + 1));
    }, 50);
    const interval2 = setInterval(() => {
      setProgress2(p => (p >= 100 ? 0 : p + 2));
    }, 50);
    const interval3 = setInterval(() => {
      setProgress3(p => (p >= 100 ? 0 : p + 1.5));
    }, 50);
    const interval4 = setInterval(() => {
      setProgress4(p => (p >= 100 ? 0 : p + 0.8));
    }, 50);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  // Auto card rotation
  useEffect(() => {
    const interval1 = setInterval(() => setActiveCard1(c => (c + 1) % 4), 3000);
    const interval2 = setInterval(() => setActiveCard2(c => (c + 1) % 4), 3500);
    const interval3 = setInterval(() => setActiveCard3(c => (c + 1) % 4), 4000);
    const interval4 = setInterval(() => setActiveCard4(c => (c + 1) % 4), 4500);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-4 overflow-x-hidden">
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideStripes {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: scale(1); }
          40%, 43% { transform: scale(1.3); }
          70% { transform: scale(1.1); }
          90% { transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 animate-pulse">
            Ultimate Component Library
          </h1>
          <p className="text-purple-200 text-lg">Modern Animated UI Components</p>
        </div>

        {/* SWITCHERS SECTION */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🎛️</span> Switchers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Switcher 1: Morphing Background */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">1. Morphing Background</h3>
              <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 p-2 rounded-2xl">
                <div
                  className="absolute top-2 bottom-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl transition-all duration-500 ease-out shadow-lg shadow-cyan-500/50"
                  style={{
                    left: `${switcher1 * 25 + 0.5}%`,
                    width: 'calc(25% - 0.25rem)',
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'
                  }}
                />
                {switcherOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSwitcher1(idx)}
                    className={`relative z-10 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                      switcher1 === idx ? 'text-white scale-110' : 'text-gray-400'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Switcher 2: Wave Animation */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">2. Wave Slide</h3>
              <div className="relative bg-slate-800/50 p-2 rounded-2xl overflow-hidden">
                <div
                  className="absolute top-2 bottom-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl transition-all duration-700 ease-in-out"
                  style={{
                    left: `${switcher2 * 25}%`,
                    width: '25%',
                    clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)',
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)'
                  }}
                />
                {switcherOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSwitcher2(idx)}
                    className={`relative z-10 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                      switcher2 === idx ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Switcher 3: Liquid Morph */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">3. Liquid Morph</h3>
              <div className="flex gap-3">
                {switcherOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSwitcher3(idx)}
                    className="relative px-6 py-3 rounded-2xl font-bold transition-all duration-500 overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 transition-all duration-700 ${
                        switcher3 === idx ? 'scale-100' : 'scale-0'
                      }`}
                      style={{
                        clipPath: switcher3 === idx 
                          ? 'circle(150% at 50% 50%)' 
                          : 'circle(0% at 50% 50%)'
                      }}
                    />
                    <span className={`relative z-10 ${switcher3 === idx ? 'text-white' : 'text-gray-400'}`}>
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Switcher 4: Diamond Cut */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">4. Diamond Cut</h3>
              <div className="flex gap-3">
                {switcherOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSwitcher4(idx)}
                    className="relative px-6 py-4 font-bold transition-all duration-500 overflow-hidden"
                    style={{
                      clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)'
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 ${
                        switcher4 === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    <div className="absolute inset-0 bg-slate-700" style={{ zIndex: switcher4 === idx ? -1 : 1 }} />
                    <span className={`relative z-10 ${switcher4 === idx ? 'text-white' : 'text-gray-400'}`}>
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TOGGLES SECTION */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🎚️</span> Toggles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Toggle 1: Neon Slide */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">1. Neon Slide</h3>
              <button
                onClick={() => setToggle1(!toggle1)}
                className={`relative w-24 h-12 rounded-full transition-all duration-500 ${
                  toggle1 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-slate-700'
                }`}
                style={{
                  boxShadow: toggle1 ? '0 0 30px rgba(6, 182, 212, 0.6)' : 'none'
                }}
              >
                <div
                  className={`absolute top-1 w-10 h-10 bg-white rounded-full transition-all duration-500 shadow-xl ${
                    toggle1 ? 'left-12' : 'left-1'
                  }`}
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                />
              </button>
            </div>

            {/* Toggle 2: Morph Toggle */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">2. Morph Toggle</h3>
              <button
                onClick={() => setToggle2(!toggle2)}
                className="relative w-24 h-12 bg-slate-800 rounded-full overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700`}
                  style={{
                    clipPath: toggle2 
                      ? 'circle(150% at 100% 50%)' 
                      : 'circle(0% at 0% 50%)'
                  }}
                />
                <div
                  className={`absolute top-1 w-10 h-10 bg-white rounded-full transition-all duration-500 ${
                    toggle2 ? 'left-12' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Toggle 3: Icon Transform */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">3. Icon Transform</h3>
              <button
                onClick={() => setToggle3(!toggle3)}
                className={`relative w-24 h-12 rounded-full transition-all duration-500 ${
                  toggle3 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`absolute top-1 w-10 h-10 rounded-full transition-all duration-500 flex items-center justify-center text-xl ${
                    toggle3 ? 'left-12 bg-white' : 'left-1 bg-gray-600'
                  }`}
                  style={{
                    transform: toggle3 ? 'rotate(360deg)' : 'rotate(0deg)'
                  }}
                >
                  {toggle3 ? '✓' : '✕'}
                </div>
              </button>
            </div>

            {/* Toggle 4: Liquid Fill */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">4. Liquid Fill</h3>
              <button
                onClick={() => setToggle4(!toggle4)}
                className="relative w-24 h-12 bg-slate-800 rounded-full overflow-hidden border-2 border-slate-600"
              >
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-yellow-400 transition-all duration-700`}
                  style={{
                    height: toggle4 ? '100%' : '0%',
                    clipPath: 'polygon(0 20%, 10% 10%, 20% 20%, 30% 10%, 40% 20%, 50% 10%, 60% 20%, 70% 10%, 80% 20%, 90% 10%, 100% 20%, 100% 100%, 0 100%)'
                  }}
                />
                <div
                  className={`absolute top-1 w-10 h-10 bg-white rounded-full transition-all duration-500 z-10 ${
                    toggle4 ? 'left-12' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* CHECKBOXES SECTION */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">☑️</span> Checkboxes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Checkbox 1: Check Mark Draw */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">1. Check Draw</h3>
              <button
                onClick={() => setCheck1(!check1)}
                className={`w-16 h-16 rounded-2xl border-4 transition-all duration-500 flex items-center justify-center ${
                  check1 
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-400 scale-110' 
                    : 'bg-slate-800 border-slate-600'
                }`}
                style={{
                  boxShadow: check1 ? '0 0 30px rgba(6, 182, 212, 0.5)' : 'none'
                }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  style={{
                    strokeDasharray: 50,
                    strokeDashoffset: check1 ? 0 : 50,
                    transition: 'stroke-dashoffset 0.5s ease-in-out'
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>

            {/* Checkbox 2: Fill Animation */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">2. Fill Wave</h3>
              <button
                onClick={() => setCheck2(!check2)}
                className="relative w-16 h-16 rounded-2xl border-4 border-purple-500 overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 transition-all duration-700"
                  style={{
                    clipPath: check2 
                      ? 'circle(150% at 50% 50%)' 
                      : 'circle(0% at 50% 50%)'
                  }}
                />
                <div className={`absolute inset-0 flex items-center justify-center text-white text-3xl font-bold transition-all duration-300 ${
                  check2 ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                }`}>
                  ✓
                </div>
              </button>
            </div>

            {/* Checkbox 3: Box Morph */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">3. Box Morph</h3>
              <button
                onClick={() => setCheck3(!check3)}
                className={`w-16 h-16 transition-all duration-700 flex items-center justify-center overflow-hidden ${
                  check3 ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-slate-800 border-4 border-slate-600'
                }`}
                style={{
                  borderRadius: check3 ? '50%' : '1rem',
                  clipPath: check3 
                    ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' 
                    : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              >
                <span className={`text-white text-3xl transition-all duration-500 ${
                  check3 ? 'scale-100 rotate-360' : 'scale-0'
                }`}>
                  ✓
                </span>
              </button>
            </div>

            {/* Checkbox 4: Bounce Check */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">4. Bounce Check</h3>
              <button
                onClick={() => setCheck4(!check4)}
                className={`w-16 h-16 rounded-2xl transition-all duration-500 flex items-center justify-center ${
                  check4 
                    ? 'bg-gradient-to-br from-orange-500 to-red-600' 
                    : 'bg-slate-800 border-4 border-slate-600'
                }`}
                style={{
                  transform: check4 ? 'scale(1.2)' : 'scale(1)',
                  animation: check4 ? 'bounce 0.5s ease-in-out' : 'none'
                }}
              >
                <div
                  className="text-white text-3xl font-bold transition-all duration-300"
                  style={{
                    transform: check4 ? 'scale(1) rotate(360deg)' : 'scale(0) rotate(0deg)'
                  }}
                >
                  ✓
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* PROGRESS BARS SECTION */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">📊</span> Progress Bars
          </h2>
          
          <div className="space-y-8">
            {/* Progress 1: Gradient Flow */}
            <div className="space-y-3">
              <h3 className="text-xl text-purple-300 font-semibold">1. Gradient Flow</h3>
              <div className="relative h-8 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-300 rounded-full"
                  style={{
                    width: `${progress1}%`,
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {Math.round(progress1)}%
                </div>
              </div>
            </div>

            {/* Progress 2: Striped Animation */}
            <div className="space-y-3">
              <h3 className="text-xl text-purple-300 font-semibold">2. Striped Motion</h3>
              <div className="relative h-8 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-300"
                  style={{
                    width: `${progress2}%`,
                    background: 'repeating-linear-gradient(45deg, #a855f7 0px, #a855f7 10px, #ec4899 10px, #ec4899 20px)',
                    backgroundSize: '200% 100%',
                    animation: 'slideStripes 1s linear infinite'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {Math.round(progress2)}%
                </div>
              </div>
            </div>

            {/* Progress 3: Pulse Wave */}
            <div className="space-y-3">
              <h3 className="text-xl text-purple-300 font-semibold">3. Pulse Wave</h3>
              <div className="relative h-8 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 rounded-full"
                  style={{
                    width: `${progress3}%`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 80%, 5% 70%, 10% 80%, 15% 70%, 20% 80%, 25% 70%, 30% 80%, 35% 70%, 40% 80%, 45% 70%, 50% 80%, 55% 70%, 60% 80%, 65% 70%, 70% 80%, 75% 70%, 80% 80%, 85% 70%, 90% 80%, 95% 70%, 100% 80%)'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {Math.round(progress3)}%
                </div>
              </div>
            </div>

            {/* Progress 4: Glowing Trail */}
            <div className="space-y-3">
              <h3 className="text-xl text-purple-300 font-semibold">4. Glowing Trail</h3>
              <div className="relative h-8 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-300 rounded-full"
                  style={{
                    width: `${progress4}%`,
                    boxShadow: '0 0 30px rgba(251, 146, 60, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white rounded-full animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {Math.round(progress4)}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VALUE BARS SECTION */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">📈</span> Value Bars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bar 1: Vertical Neon */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">1. Vertical Neon</h3>
              <div className="flex items-end gap-4 h-48">
                {[barValue1, barValue1 - 15, barValue1 + 10, barValue1 - 5].map((val, idx) => (
                  <div key={idx} className="flex-1 relative">
                    <div
                      className="w-full bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-xl transition-all duration-700"
                      style={{
                        height: `${val}%`,
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)'
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-cyan-300 font-bold">
                        {val}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={barValue1}
                onChange={(e) => setBarValue1(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>

            {/* Bar 2: Segmented Bars */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">2. Segmented Growth</h3>
              <div className="space-y-3">
                {['Design', 'Development', 'Testing', 'Deploy'].map((label, idx) => {
                  const val = [barValue2, barValue2 + 20, barValue2 - 10, barValue2 + 15][idx];
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{label}</span>
                        <span>{val}%</span>
                      </div>
                      <div className="h-6 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${
                            ['from-purple-500 to-pink-500', 'from-blue-500 to-cyan-500', 
                             'from-green-500 to-emerald-500', 'from-orange-500 to-red-500'][idx]
                          } transition-all duration-700 rounded-full`}
                          style={{ width: `${val}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={barValue2}
                onChange={(e) => setBarValue2(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            {/* Bar 3: Circular Progress */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">3. Circular Progress</h3>
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-slate-700"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#gradient3)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="352"
                      strokeDashoffset={352 - (barValue3 / 100) * 352}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                    {barValue3}%
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={barValue3}
                onChange={(e) => setBarValue3(Number(e.target.value))}
                className="w-full accent-green-500"
              />
            </div>

            {/* Bar 4: Animated Wave */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">4. Animated Wave</h3>
              <div className="relative h-32 bg-slate-800 rounded-2xl overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-yellow-400 transition-all duration-1000"
                  style={{
                    height: `${barValue4}%`,
                    clipPath: 'polygon(0 30%, 10% 20%, 20% 30%, 30% 20%, 40% 30%, 50% 20%, 60% 30%, 70% 20%, 80% 30%, 90% 20%, 100% 30%, 100% 100%, 0 100%)'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                  {barValue4}%
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={barValue4}
                onChange={(e) => setBarValue4(Number(e.target.value))}
                className="w-full accent-orange-500"
              />
            </div>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🃏</span> Animated Cards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: 3D Flip */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">1. 3D Flip Cards</h3>
              <div className="relative h-64 perspective-1000">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} p-6 transition-all duration-1000 transform-style-3d ${
                      activeCard1 === idx ? 'rotate-y-0 opacity-100 z-10' : 'rotate-y-180 opacity-0'
                    }`}
                    style={{
                      transform: `rotateY(${activeCard1 === idx ? 0 : 180}deg)`,
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="text-6xl mb-4">{card.icon}</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-white/80">Interactive 3D flip animation with smooth transitions</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Floating Cards */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">2. Floating Cards</h3>
              <div className="relative h-64">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} p-6 transition-all duration-1000 ${
                      activeCard2 === idx ? 'scale-100 opacity-100 z-10' : 'scale-75 opacity-0'
                    }`}
                    style={{
                      animation: activeCard2 === idx ? 'float 3s ease-in-out infinite' : 'none'
                    }}
                  >
                    <div className="text-6xl mb-4">{card.icon}</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-white/80">Floating animation with scaling effects</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Slide Show */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">3. Slide Show</h3>
              <div className="relative h-64 overflow-hidden rounded-3xl">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} p-6 transition-all duration-1000 ${
                      activeCard3 === idx ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  >
                    <div className="text-6xl mb-4">{card.icon}</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-white/80">Smooth slide transition between cards</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: Morph Cards */}
            <div className="space-y-4">
              <h3 className="text-xl text-purple-300 font-semibold">4. Morph Cards</h3>
              <div className="relative h-64">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} p-6 transition-all duration-1000 ${
                      activeCard4 === idx 
                        ? 'scale-100 rotate-0 opacity-100' 
                        : 'scale-50 rotate-45 opacity-0'
                    }`}
                    style={{
                      clipPath: activeCard4 === idx 
                        ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                        : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                    }}
                  >
                    <div className="text-6xl mb-4">{card.icon}</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-white/80">Morphing shape transitions</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BANNERS SECTION */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🚨</span> Notification Banners
          </h2>
          
          <div className="space-y-6">
            {/* Banner 1: Slide Down */}
            {bannerVisible1 && (
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white transform transition-all duration-500 animate-slideDown">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h4 className="font-bold text-lg">Success Banner</h4>
                      <p className="text-cyan-100">This is a sliding notification banner</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setBannerVisible1(false)}
                    className="text-white hover:text-cyan-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Banner 2: Glow Pulse */}
            {bannerVisible2 && (
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white transform transition-all duration-500"
                style={{ animation: 'glow 2s ease-in-out infinite' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <h4 className="font-bold text-lg">Warning Banner</h4>
                      <p className="text-purple-100">Pulsing glow effect notification</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setBannerVisible2(false)}
                    className="text-white hover:text-purple-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Banner 3: Shimmer */}
            {bannerVisible3 && (
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h4 className="font-bold text-lg">Info Banner</h4>
                      <p className="text-green-100">Shimmering background effect</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setBannerVisible3(false)}
                    className="text-white hover:text-green-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Banner 4: Bounce In */}
            {bannerVisible4 && (
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white transform transition-all duration-500 animate-bounce">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <h4 className="font-bold text-lg">Alert Banner</h4>
                      <p className="text-orange-100">Bouncing entrance animation</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setBannerVisible4(false)}
                    className="text-white hover:text-orange-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Reset Banners Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  setBannerVisible1(true);
                  setBannerVisible2(true);
                  setBannerVisible3(true);
                  setBannerVisible4(true);
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:scale-105 transition-transform duration-300"
              >
                Reset All Banners
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-purple-300">
            Built with React & Tailwind CSS • Modern UI Component Library
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimateComponentLibrary;