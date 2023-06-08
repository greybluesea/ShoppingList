"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
type Props = Item & { handleCheck: (id: string, complete: boolean) => void };

const Pair = ({ id, title, complete, handleCheck }: Props) => {
  const router = useRouter();
  const { pending } = useFormStatus();

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
        disabled={pending}
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
