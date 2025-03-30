export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div
        className="flex flex-col p-2 bg-gray-700 rounded-lg shadow-sm cursor-pointer hover:bg-gray-600"
        onClick={() => onSelect(name)}
      >
        <span className="font-bold text-white">{name}</span>
        <span className="text-gray-300 text-sm">Buy {quantity} in {category}</span>
      </div>
    );
  }
  