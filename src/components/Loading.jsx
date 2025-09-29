export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-300 to-purple-500">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-purple-800 font-semibold">🔮 </p>
      </div>
 </div>
);
}