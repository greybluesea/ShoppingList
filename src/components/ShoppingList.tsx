import { prisma } from "@/db";

const getList = async () => {
  return await prisma.item.findMany();
};

const ShoppingList = () => {
  const list = getList();

  return (
    <ul>
      {list.then((data) =>
        data.map((item) => (
          <li className="flex gap-1 items-center" key={item.id}>
            <input
              id={item.id}
              type="checkbox"
              className="cursor-pointer peer"
            />
            <label htmlFor={item.id} className=" peer-checked:line-through">
              {item.title}
            </label>
          </li>
        ))
      )}
    </ul>
  );
};

export default ShoppingList;
