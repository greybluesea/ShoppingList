import { prisma } from "@/db";
import Item from "./Item";
import { redirect } from "next/dist/server/api-utils";

async function getList() {
  "use server";
  return await prisma.item.findMany();
}

async function toggleComplete(id: string, checked: boolean) {
  "use server";
  await prisma.item.update({ where: { id }, data: { complete: checked } });
}

async function deleteItem(id: string) {
  "use server";
  await prisma.item.delete({ where: { id } });
}

const ShoppingList = () => {
  const list: Promise<Item[]> = getList();

  return (
    <ul>
      {list.then((data) =>
        data.map((item) => (
          <Item
            {...item}
            key={item.id}
            handleCheck={toggleComplete}
            handleDelete={deleteItem}
          />
        ))
      )}
    </ul>
  );
};

export default ShoppingList;
