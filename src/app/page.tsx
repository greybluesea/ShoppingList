import Link from "next/link";
import ShoppingList from "../components/ShoppingList";

const Home = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl flex gap-2">Shopping List</h1>
        <Link className="btn-or-link " href="/new-item">
          New Item
        </Link>
      </header>
      <ShoppingList />
    </>
  );
};

export default Home;
