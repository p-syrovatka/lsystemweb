const instructions = {
    "F": "Move forward and draw a line from the current point to the new point.",
    "G": "Move forward and draw a line from the current point to the new point.",
    "+": "Rotate the drawing direction clockwise by a specified angle.",
    "-": "Rotate the drawing direction counterclockwise by a specified angle.",
    "*": "Rotate the drawing direction around the Y-axis clockwise by a specified angle.",
    "/": "Rotate the drawing direction around the Y-axis counterclockwise by a specified angle.",
    "[": "Save the current position and direction.",
    "]": "Return to the previous saved position."
  };
  

function QuickGuideModal({ onClose }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={onClose}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full">
        <div
          onClick={stopPropagation}
          className="relative p-4 w-full max-w-screen-xl 0 m-auto max-h-full">
          <div className="relative  dark:bg-slate-900 bg-[rgba(36,38,59,0.9)] rounded-lg shadow-custom backdrop-filter[blur(16.7px)] p-1 pt-1">
            <div
              className="absolute text-white p-4 right-0 cursor-pointer"
              onClick={onClose}>
              X
            </div>
            <div className="flex flex-col sm:min-h-36 text-white text-2xl font-bold items-center justify-center pb-8">
              <h1 className="text-2xl font-bold border-b">Quick Guide</h1>
              <p className="pb-2 text-xl">Fill axiom, iteration and rules with the following aplhabet and create fractals based 3D objects.</p>
              <ul>
                {Object.entries(instructions).map(([key, value]) => (
                  <li key={key} className="p-1 border-b m-1">{`${key} : ${value}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickGuideModal;
