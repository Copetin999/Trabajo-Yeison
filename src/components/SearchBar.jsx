export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Buscar tarea por autor o texto..."
      className="border rounded-lg px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
/>
);
}