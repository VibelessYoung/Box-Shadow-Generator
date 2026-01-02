import { useState } from "react";

function App() {
  const [X, setX] = useState(10);
  const [Y, setY] = useState(10);
  const [blur, setBlur] = useState(10);
  const [range, setRange] = useState(10);
  const [color, setColor] = useState("#000000");

  return (
    <div
      className="min-h-screen w-full 
bg-gradient-to-br 
from-white via-zinc-100 to-zinc-200 
flex items-center justify-center 
px-4 sm:px-8"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="w-full lg:flex-1 flex justify-center">
          <div
            style={{
              boxShadow: `${X}px ${Y}px ${blur}px ${range}px ${color}`,
            }}
            className="bg-amber-400 
                          p-20 sm:p-28 lg:p-32 
                          rounded-3xl 
                          shadow-[0px_20px_60px_rgba(0,0,0,0.6)] 
                          flex items-center justify-center"
          >
            <p
              className="bg-white text-black 
                          px-5 py-2 sm:px-6 sm:py-3 
                          rounded-full 
                          text-sm sm:text-base 
                          font-semibold tracking-wide"
            >
              Box-Shadow: {X}px {Y}px {blur}px {range}px {color}
            </p>
          </div>
        </div>
        <div
          className="w-full sm:max-w-md 
                        backdrop-blur-xl 
                        bg-white/10 
                        border border-white/20 
                        rounded-2xl 
                        p-5 sm:p-6 
                        shadow-xl"
        >
          <h2 className="text-black text-lg sm:text-xl font-bold mb-5 text-center">
            Shadow Controller
          </h2>
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-black text-xs sm:text-sm">X</label>
              <input
                onChange={(e) => setX(e.target.value)}
                value={X}
                type="range"
                min="-50"
                max="50"
                defaultValue="0"
                className="w-full appearance-none h-2 rounded-full bg-yellow-200 accent-amber-400 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-xs sm:text-sm">Y</label>
              <input
                onChange={(e) => setY(e.target.value)}
                value={Y}
                type="range"
                min="-50"
                max="50"
                defaultValue="0"
                className="w-full appearance-none h-2 rounded-full bg-yellow-200 accent-amber-400 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-xs sm:text-sm">Blur</label>
              <input
                onChange={(e) => setBlur(e.target.value)}
                value={blur}
                type="range"
                min="0"
                max="100"
                className="w-full appearance-none h-2 rounded-full bg-yellow-200 cursor-pointer accent-amber-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-xs sm:text-sm">
                Color range
              </label>
              <input
                onChange={(e) => setRange(e.target.value)}
                value={range}
                type="range"
                min="-50"
                max="50"
                className="w-full appearance-none h-2 rounded-full bg-yellow-200 cursor-pointer accent-amber-400"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <label className="text-black text-xs sm:text-sm">
                Shadow Color
              </label>
              <input
                onChange={(e) => setColor(e.target.value)}
                value={color}
                type="color"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-none bg-transparent cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
