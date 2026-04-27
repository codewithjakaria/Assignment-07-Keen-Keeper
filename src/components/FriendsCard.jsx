import { Link } from 'react-router-dom';

export default function FriendCard({ friend }) {
  const statusColor =
    friend.status === 'overdue'
      ? 'bg-[#EF4444]'
      : friend.status === 'almost due'
        ? 'bg-[#EFAD44]'
        : 'bg-[#244D3F]';

  return (
    <Link to={`/friend/${friend.id}`} className="block">
      <div className="bg-white rounded-[32px] shadow-sm p-6 flex flex-col items-center hover:shadow-md transition-all border border-gray-50 h-full">
        <div className="relative">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>

        <h3 className="text-[#1A1A1A] font-bold text-lg mt-4 leading-tight">
          {friend.name}
        </h3>

        <p className="text-gray-400 text-[13px] mt-1 font-medium">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-col items-center gap-1.5 mt-4 w-full">
          <div className="flex flex-wrap justify-center gap-2">
            {friend.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] font-bold bg-[#CBFADB] text-emerald-600 px-3 py-1 rounded-full uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className={`${statusColor} text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-sm`}
          >
            {friend.status === 'overdue'
              ? 'Overdue'
              : friend.status === 'almost due'
                ? 'Almost Due'
                : 'On-Track'}
          </div>
        </div>
      </div>
    </Link>
  );
}
