import Item from "./item";
import ItemList from "./item-list";
export default function Page() {
    return (
      <main className="bg-black">
        <h1 className="text-white">Shopping List</h1>
        <ItemList/>
      </main>
    );
  }