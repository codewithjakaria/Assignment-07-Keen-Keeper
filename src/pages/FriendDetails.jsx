import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import friends from '../data/FriendsData.json';
import useTimelineStore from '../data/TimelineData';
import Call from '../assets/call.png';
import Text from '../assets/text.png';
import Video from '../assets/video.png';
import { Clock, Archive, Trash2 } from 'lucide-react';

export default function FriendDetail() {
  const { id } = useParams();
  const friend = friends.find(f => String(f.id) === id);
  const addEntry = useTimelineStore(state => state.addEntry);

  if (!friend) return null;

  const handleAction = type => {
    addEntry({
      friendName: friend.name,
      type: type,
      friendId: friend.id,
    });
    toast.success(type + ' added successfully!');
  };

  const actions = [
    { name: 'Call', img: Call },
    { name: 'Text', img: Text },
    { name: 'Video', img: Video },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side: Profile Card */}
        <div className="w-full lg:w-[380px] bg-white rounded-[24px] shadow-sm border border-gray-100 p-10 flex flex-col items-center">
          <img
            src={friend.picture}
            className="w-24 h-24 rounded-full object-cover border"
          />
          <h1 className="text-2xl font-bold mt-5">{friend.name}</h1>

          <div className="flex flex-col items-center gap-2 mt-3">
            <span
              className={`px-5 py-1 rounded-full text-[10px] font-bold uppercase text-white ${friend.status === 'overdue' ? 'bg-red-500' : 'bg-[#244D3F]'}`}
            >
              {friend.status}
            </span>
            <span className="px-5 py-1 rounded-full bg-[#CBFADB] text-emerald-700 text-[10px] font-bold uppercase">
              {friend.tags?.[0] || 'Family'}
            </span>
          </div>

          <p className="text-center text-gray-400 italic mt-8 text-sm">
            "{friend.bio}"
          </p>

          <div className="mt-10 w-full space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-white border py-4 rounded-2xl text-[13px] font-bold hover:bg-gray-50">
              <Clock size={18} /> Snooze
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border py-4 rounded-2xl text-[13px] font-bold hover:bg-gray-50">
              <Archive size={18} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border py-4 rounded-2xl text-[13px] font-bold text-red-500 hover:bg-red-50">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        {/* Right Side: Stats & Actions */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 flex divide-x overflow-hidden text-center">
            <div className="flex-1 py-12">
              <p className="text-5xl font-bold">{friend.days_since_contact}</p>
              <p className="text-[11px] text-gray-400 mt-3 font-bold uppercase">
                Days Since
              </p>
            </div>
            <div className="flex-1 py-12">
              <p className="text-5xl font-bold">{friend.goal}</p>
              <p className="text-[11px] text-gray-400 mt-3 font-bold uppercase">
                Goal
              </p>
            </div>
            <div className="flex-1 py-12">
              <p className="text-2xl font-bold">{friend.next_due_date}</p>
              <p className="text-[11px] text-gray-400 mt-3 font-bold uppercase">
                Next Due
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-[11px] font-bold text-gray-300 uppercase">
                Relationship Goal
              </p>
              <p className="text-[15px] font-bold mt-1">
                Connect every {friend.goal} days
              </p>
            </div>
            <button className="text-[11px] font-bold text-gray-400 bg-gray-50 px-6 py-2 rounded-xl border">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100">
            <h3 className="text-[15px] font-bold mb-8">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-6">
              {actions.map(item => (
                <button
                  key={item.name}
                  onClick={() => handleAction(item.name)}
                  className="bg-[#F8FAFC] rounded-[28px] py-10 flex flex-col items-center gap-4 hover:border-gray-200 border border-transparent transition"
                >
                  <img src={item.img} className="w-10 h-10 object-contain" />
                  <span className="text-[12px] font-bold text-gray-400 uppercase">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
