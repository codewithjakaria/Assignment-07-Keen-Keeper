import { useParams } from 'react-router-dom';
import friends from '../data/FriendsData.json';
import Call from '../assets/call.png';
import Text from '../assets/text.png';
import Video from '../assets/video.png';
import { Clock, Archive, Trash2 } from 'lucide-react';

export default function FriendDetail() {
  const { id } = useParams();
  const friend = friends.find(f => String(f.id) === String(id));

  if (!friend)
    return <div className="p-10 text-center font-bold">Friend not found!</div>;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="w-full lg:w-[380px] bg-white rounded-[24px] shadow-sm border border-gray-100 p-10 flex flex-col items-center justify-between">
          <div className="w-full flex flex-col items-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full object-cover border border-gray-100"
            />
            <h1 className="text-2xl font-bold mt-5 text-[#1A1A1A]">
              {friend.name}
            </h1>

            <div className="flex flex-col items-center gap-2 mt-2">
              <span
                className={`px-5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${
                  friend.status === 'overdue'
                    ? 'bg-[#EF4444]'
                    : friend.status === 'almost due'
                      ? 'bg-[#EFAD44]'
                      : 'bg-[#244D3F]'
                }`}
              >
                {friend.status}
              </span>
              <span className="px-5 py-1 rounded-full bg-[#CBFADB] text-emerald-700 text-[10px] font-bold uppercase tracking-widest">
                {friend.tags?.[0] || 'Family'}
              </span>
            </div>

            <p className="text-center text-gray-400 italic mt-8 text-[14px] leading-relaxed">
              "{friend.bio}"
            </p>
            <p className="text-center text-gray-400 text-[11px] mt-2 font-medium uppercase">
              Preferred: {friend.preferred_contact}
            </p>
          </div>

          <div className="mt-10 w-full space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 py-4 rounded-2xl text-[13px] font-bold text-[#1A1A1A] hover:bg-gray-50 transition shadow-sm">
              <Clock size={18} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 py-4 rounded-2xl text-[13px] font-bold text-[#1A1A1A] hover:bg-gray-50 transition shadow-sm">
              <Archive size={18} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-100 py-4 rounded-2xl text-[13px] font-bold text-red-500 hover:bg-red-50 transition shadow-sm">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 flex divide-x divide-gray-100 overflow-hidden">
            <div className="flex-1 py-12 text-center">
              <p className="text-5xl font-bold text-[#1A1A1A]">
                {friend.days_since_contact}
              </p>
              <p className="text-[11px] text-gray-400 mt-3 font-bold uppercase tracking-widest px-2">
                Days Since Contact
              </p>
            </div>
            <div className="flex-1 py-12 text-center">
              <p className="text-5xl font-bold text-[#1A1A1A]">{friend.goal}</p>
              <p className="text-[11px] text-gray-400 mt-3 font-bold uppercase tracking-widest px-2">
                Goal (Days)
              </p>
            </div>
            <div className="flex-1 py-12 text-center flex flex-col justify-center">
              <p className="text-2xl font-bold text-[#1A1A1A]">
                {friend.next_due_date}
              </p>
              <p className="text-[11px] text-gray-400 mt-3 font-bold uppercase tracking-widest px-2">
                Next Due
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-[12px] font-bold text-gray-300 uppercase tracking-widest">
                Relationship Goal
              </h3>
              <p className="text-[15px] font-bold text-[#1A1A1A] mt-2">
                Connect every {friend.goal} days
              </p>
            </div>
            <button className="text-[11px] font-bold text-gray-400 bg-gray-50 px-6 py-2.5 rounded-xl border border-gray-100 hover:bg-gray-100 transition tracking-widest uppercase">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100 flex-grow">
            <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-8">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-6 h-[calc(100%-40px)]">
              <button className="bg-[#F8FAFC] rounded-[28px] flex flex-col items-center justify-center gap-4 hover:bg-gray-50 transition border border-transparent hover:border-gray-100 group">
                <img
                  src={Call}
                  alt="Call"
                  className="w-10 h-10 opacity-80 group-hover:opacity-100 object-contain"
                />
                <span className="text-[12px] font-bold text-gray-400 group-hover:text-gray-700 uppercase tracking-widest">
                  Call
                </span>
              </button>
              <button className="bg-[#F8FAFC] rounded-[28px] flex flex-col items-center justify-center gap-4 hover:bg-gray-50 transition border border-transparent hover:border-gray-100 group">
                <img
                  src={Text}
                  alt="Text"
                  className="w-10 h-10 opacity-80 group-hover:opacity-100 object-contain"
                />
                <span className="text-[12px] font-bold text-gray-400 group-hover:text-gray-700 uppercase tracking-widest">
                  Text
                </span>
              </button>
              <button className="bg-[#F8FAFC] rounded-[28px] flex flex-col items-center justify-center gap-4 hover:bg-gray-50 transition border border-transparent hover:border-gray-100 group">
                <img
                  src={Video}
                  alt="Video"
                  className="w-10 h-10 opacity-80 group-hover:opacity-100 object-contain"
                />
                <span className="text-[12px] font-bold text-gray-400 group-hover:text-gray-700 uppercase tracking-widest">
                  Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
