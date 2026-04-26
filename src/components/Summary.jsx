export default function SummaryCard({ title, value, color = 'emerald' }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm text-center">
      <p
        className={`text-5xl font-bold ${color === 'emerald' ? 'text-emerald-700' : color === 'red' ? 'text-red-500' : 'text-gray-900'}`}
      >
        {value}
      </p>
      <p className="text-sm text-gray-500 mt-1">{title}</p>
    </div>
  );
}
