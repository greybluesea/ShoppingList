"use client";
/* import { useRouter } from "next/navigation"; */
import { useState } from "react";
/* import { experimental_useOptimistic as useOptimistic } from "react"; */

type ItemProps = Item & {
  handleCheck: (id: string, complete: boolean) => void;
  handleDelete: (id: string) => void;
};

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
  /* const router = useRouter(); */
  /* const [checkStatus, setCheckStatus] = useState(complete); */
  /* const [optimisticItem, addOptimisticItem] = useOptimistic(
    {
      id,
      title,
      complete,
      createdAt,
      updatedAt,
    },
    (state: Item, completed: boolean) => ({ ...state, completed })
  ); */

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
          /* checked={checkStatus} */
          defaultChecked={complete}
          /* checked={optimisticItem.complete} */
          onChange={(e) => {
            /*  addOptimisticItem(!complete); */
            handleCheck(id, e.target.checked);
            /*  router.refresh(); */
            /* setCheckStatus(e.target.checked); */
          }}
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
