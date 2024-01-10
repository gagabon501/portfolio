import React from "react";

function Card({ title, body }) {
  return (
    <div className="container mx-auto  bg-slate-400 rounded-xl">
      <div className="text-xl text-center">{title}</div>
      <div className="bg-slate-200 p-3 rounded-b-xl">{body}</div>
    </div>
  );
}

export default Card;
