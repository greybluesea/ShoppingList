"use client";

interface ItemProps {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
  handleChange: (id: string, complete: boolean) => void;
}

const Item = ({
  id,
  title,
  complete,
  createdAt,
  updatedAt,
  handleChange,
}: ItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => handleChange(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className=" peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
};

export default Item;
