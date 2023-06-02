import { prisma } from "@/db";
import Item from "./Item";

async function getList() {
  "use server";
  return await prisma.item.findMany();
}

async function toggleComplete(id: String, checked: Boolean) {
  "use server";
}

const ShoppingList = () => {
  const list = getList();

  return (
    <ul>
      {list.then((data) =>
        data.map((item) => (
          <Item {...item} key={item.id} handleChange={toggleComplete} />
        ))
      )}
    </ul>
  );
};

export default ShoppingList;
