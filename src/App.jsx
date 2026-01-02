function App() {
  return (
    <>
      <div className="w-full flex justify-around items-center h-screen">
        <div className="bg-amber-500 flex justify-center items-center p-36">
          <p className="p-3 bg-white text-black rounded-full">box shadow:</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-1.5 items-center">
            <label htmlFor="">X</label>
            <input type="range" />
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            <label htmlFor="">Y</label>
            <input type="range" />
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            <label htmlFor="">Color range</label>
            <input type="range" />
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            <label htmlFor="">Color</label>
            <input type="color" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
