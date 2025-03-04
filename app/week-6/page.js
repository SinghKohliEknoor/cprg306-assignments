import Item from "./item";
import ItemList from "./item-list";
export default function Page() {
    return (
      <main className="bg-black">
        <h1 className="text-white font-bold text-[30px] ">Shopping List</h1>
        <ItemList/>
      </main>
    );
  }