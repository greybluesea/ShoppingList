"use client";

import React from "react";

type Props = Item & { handleCheck: (id: string, complete: boolean) => void };

const Pair = ({ id, title, complete, handleCheck }: Props) => {
  return (
    <div className="flex gap-1 items-center text-lg">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => {
          handleCheck(id, e.target.checked);
        }}
        /* formAction={async () => {
                  "use server";
                  await toggleComplete(item.id, item.complete);
                }} */
      />
      <label
        htmlFor={id}
        className=" peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </div>
  );
};

export default Pair;