function QuickGuidePage() {
  return (
    <div className="flex justify-center items-center bg-slate-950 h-screen">
      ¨<div></div>
      <div
        style={{
          height: "1px",
          width: "150px",
          background:
            "linear-gradient(to right, transparent, cyan, transparent)",
          margin: "0 auto",
        }}></div>
      <div className="bg-gradient-to-r from-transparent via-cyan-800 to-transparent h-px w-40 mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan opacity-50 z-10"></div>
          <div className="bg-gradient-to-r from-transparent via-cyan-900 to-transparent h-px w-40 mx-auto z-20 relative">
            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan to-transparent h-16 blur-md"></div>
              <div className="relative h-px w-40 bg-cyan mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickGuidePage;
