import React from "react";

export const Card = ({ title, description }) => {
  return (
    <div>
      <h1 className="mb-4 text-4xl">{title}</h1>
      <button onClick={'delete'} className="p-3 bg-slate-400">delete</button>
    </div>
  );
};
