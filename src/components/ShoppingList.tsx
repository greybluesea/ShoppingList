import { redirect } from "next/dist/server/api-utils";
import { revalidatePath } from "next/cache";
import { deleteItem, getList, toggleComplete } from "@/utils";
import Pair from "./Pair";
import Item from "./Item";

const ShoppingList = async () => {
  const list: Promise<Item[]> = getList();
  const listData = await list;

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
    /* <ul>
      {listData.map((item) => (
        <form>
          <li
            className={" flex gap-1 pb-1 items-center justify-between "}
            key={item.id}
          >
            <Pair {...item} handleCheck={toggleComplete} />
            <button
              className="text-sm btn-or-link mb-0.5"
              formAction={async () => {
                "use server";
                await deleteItem(item.id);
                revalidatePath("/");
              }}
            >
              Delete
            </button>
          </li>
        </form>
      ))}
    </ul> */
  );
};

export default ShoppingList;
