import Link from "next/link";
import ShoppingList from "../components/ShoppingList";

const Home = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl flex gap-2">Shopping List</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded-md hover:bg-slate-700 focus-within:bg-slate-700 outline-none "
          href="/new-item"
        >
          New Item
        </Link>
      </header>
      <ShoppingList />
    </>
  );
};

export default Home;
