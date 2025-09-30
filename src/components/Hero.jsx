import React, { useState } from "react";

const Hero = () => {
     /** ---------- Switchers / Toggles ---------- */
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);

  /** ---------- Checkboxes ---------- */
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);

  /** ---------- Download Button ---------- */
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("Download Complete!");
    }, 2000);
  };

  /** ---------- Progress Bar ---------- */
  const [progress, setProgress] = useState(0);
  const startProgress = () => {
    setProgress(0);
    let width = 0;
    const Interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(Interval);
        } else {
            width++;
            setProgress(width);
           
        }
    }, 100);
  };

//   const [progress, setProgress] = useState(100);

//   const startProgress = () => {
//     setProgress(100);
//     let width = 100;
//     const interval = setInterval(() => {
//       if (width <= 0) {
//         clearInterval(interval);
//       } else {
//         width--;
//         setProgress(width);
//       }
//     }, 100);
//   };
  return (
     <div className="p-6 min-h-screen ">
        <div className="max-w-2xl mx-auto space-y-8 mb-12">
      {/* ---------------- SWITCHERS ---------------- */}
      <div className="">
        <h2 className="text-xl font-bold mb-2">Switchers / Toggles</h2>
        <div className="flex gap-8">
          {/* Normal */}
          <label className="relative inline-block w-14 h-8">
            <input
              type="checkbox"
              checked={toggle1}
              onChange={() => setToggle1(!toggle1)}
              className="opacity-0 w-0 h-0"
            />
            <span
              className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                toggle1 ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
            <span
              className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
                toggle1 ? "translate-x-6" : ""
              }`}
            ></span>
          </label>

          {/* Gradient version */}
          <label className="relative inline-block w-14 h-8">
            <input
              type="checkbox"
              checked={toggle2}
              onChange={() => setToggle2(!toggle2)}
              className="opacity-0 w-0 h-0"
            />
            <span
              className={`absolute cursor-pointer inset-0 rounded-full transition-colors ${
                toggle2
                  ? "bg-gradient-to-r from-pink-500 to-red-500"
                  : "bg-gray-300"
              }`}
            ></span>
            <span
              className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
                toggle2 ? "translate-x-6" : ""
              }`}
            ></span>
          </label>
        </div>
      </div>

      {/* ---------------- CHECKBOXES ---------------- */}
      <div>
        <h2 className="text-xl font-bold mb-2">Checkboxes</h2>
        <div className="flex gap-8">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={checkbox1}
              onChange={() => setCheckbox1(!checkbox1)}
              className="sr-only"
            />
            <div
              className={`w-6 h-6 rounded border-2 transition-all flex justify-center items-center ${
                checkbox1 ? "bg-blue-500 border-blue-500" : "border-gray-400"
              }`}
            >
              {checkbox1 && (
                <span className="text-white text-lg font-bold">&#10003;</span>
              )}
            </div>
            <span className="ml-2">Option 1</span>
          </label>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={checkbox2}
              onChange={() => setCheckbox2(!checkbox2)}
              className="sr-only"
            />
            <div
              className={`w-6 h-6 rounded border-2 transition-all flex justify-center items-center ${
                checkbox2 ? "bg-green-500 border-green-500" : "border-gray-400"
              }`}
            >
              {checkbox2 && (
                <span className="text-white text-lg font-bold">&#10003;</span>
              )}
            </div>
            <span className="ml-2">Option 2</span>
          </label>
        </div>
      </div>

      {/* ---------------- DOWNLOAD BUTTON ---------------- */}
      <div>
        <h2 className="text-xl font-bold mb-2">Download Button</h2>
        <button
          onClick={handleDownload}
          className={`px-6 py-3 rounded text-white transition-all relative overflow-hidden ${
            isDownloading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={isDownloading}
        >
          {isDownloading ? "Downloading..." : "Download"}
        </button>
      </div>

      {/* ---------------- PROGRESS BAR ---------------- */}
      <div>
        <h2 className="text-xl font-bold mb-2">Progress Bar</h2>
        <div className="w-full bg-gray-300 h-6 rounded overflow-hidden mb-2">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-green-500  text-white flex items-center justify-center transition-all"
          >
            {progress}%
          </div>
        </div>
        <button
          onClick={startProgress}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
        >
          Start Progress
        </button>
      </div>
      </div>
    </div>
  );
};

export default Hero;
