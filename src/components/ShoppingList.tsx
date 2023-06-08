import { deleteItem, getList, toggleComplete } from "@/utils";
import Item from "./Item";

const ShoppingList = async () => {
  const list: Promise<Item[]> = getList();
  const listData = await list;

  return (
    <ul>
      {listData.map((item) => (
        <Item
          {...item}
          key={item.id}
          handleCheck={toggleComplete}
          handleDelete={deleteItem}
        />
      ))}
    </ul>
    /* <ul>
      {listData.map((item) => (
        <form>
          <li
            className={" flex gap-1 pb-1 items-center justify-between "}
            key={item.id}
          >
            <Pair
              {...item}
              handleCheck={toggleComplete} // revalidate={revalid} 
            />
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
