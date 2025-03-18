export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li
        className="p-2 m-2 bg-gray-700 rounded-lg shadow-sm cursor-pointer hover:bg-gray-600"
        onClick={() => onSelect(name)}
      >
        <h2 className="text-xl font-bold text-white">{name}</h2>
        <div className="text-sm text-white">
          Buy {quantity} in {category}
        </div>
      </li>
    );
  }