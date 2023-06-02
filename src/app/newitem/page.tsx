import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function addNew(data: FormData) {
  "use server";

  const title = data.get("title");
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("invalid title");
  }

  await prisma.item.create({ data: { title } });
  redirect("/");
}

const New = () => {
  return (
    <>
      <form action={addNew} className="flex gap-2 flex-col">
        <header className="flex justify-between items-center mb-2 ">
          <h1 className="text-2xl  ">New Item</h1>
          <div className="flex gap-2 justify-end">
            <Link
              href="/"
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded-md hover:bg-slate-700 focus-within:bg-slate-700 outline-none "
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded-md hover:bg-slate-700 focus-within:bg-slate-700 outline-none "
            >
              Add New
            </button>
          </div>
        </header>
        <input
          type="text"
          name="title"
          className="border border-slate-400 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-300"
        ></input>
      </form>
    </>
  );
};

export default New;
