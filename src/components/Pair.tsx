"use client";

import { useRouter } from "next/navigation";

type Props = Item & { handleCheck: (id: string, complete: boolean) => void };

const Pair = ({ id, title, complete, handleCheck }: Props) => {
  const router = useRouter();
  return (
    <div className="flex gap-1 items-center text-lg">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => {
          handleCheck(id, e.target.checked);
          router.refresh();
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
