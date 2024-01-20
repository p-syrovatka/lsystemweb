import React from 'react';

const TransformControlSelect = ({ transfromControlState, handleTransformControlChange }) => (
  <div className="inline-block relative w-64">
    <select
      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      id="grid-state"
      value={transfromControlState}
      onChange={handleTransformControlChange}>
      <option>Translate</option>
      <option>Rotate</option>
      <option>Scale</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path d="M0 6l10 10 10-10z" />
      </svg>
    </div>
  </div>
);

export default TransformControlSelect;