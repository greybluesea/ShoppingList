"use client";

import { useState } from "react";

interface ItemProps {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
  handleCheck: (id: string, complete: boolean) => void;
  handleDelete: (id: string) => void;
}

const Item = ({
  id,
  title,
  complete,
  createdAt,
  updatedAt,
  handleCheck,
  handleDelete,
}: ItemProps) => {
  const [invisible, setInvisible] = useState(false);
  return (
    <li
      className={
        " flex gap-1 pb-1 items-center justify-between " +
        (invisible && "hidden")
      }
    >
      <div className="flex gap-1 items-center text-lg">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => handleCheck(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className=" peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
      <button
        className="text-sm btn-or-link mb-0.5"
        onClick={() => {
          handleDelete(id);
          setInvisible(true);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
