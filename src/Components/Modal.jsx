import { useEffect } from "react";

function PopModal({ onClose, missingData }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    console.log(missingData);
  }, []);
  return (
    <>
      <div
        onClick={onClose}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full">
        <div
          onClick={stopPropagation}
          className="relative p-4 w-full max-w-md m-auto max-h-full">
          <div className="relative  dark:bg-gray-700 bg-[rgba(36,38,59,0.9)] rounded-lg shadow-custom backdrop-filter[blur(16.7px)] p-1 pt-1">
            <div
              className="absolute text-white p-4 right-0 cursor-pointer"
              onClick={onClose}>
              X
            </div>
            <div className="flex flex-col sm:min-h-36 text-white text-2xl font-bold items-center justify-center">
              <div>Fill the missing data!</div>
              <ul className="list-disc list-inside">
                {missingData.map((data) => (
                  <li>{data}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopModal;
