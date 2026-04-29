import { useState } from 'react';
import useTimelineStore from '../data/TimelineData';
import Call from '../assets/call.png';
import Text from '../assets/text.png';
import Video from '../assets/video.png';

export default function Timeline() {
  const entries = useTimelineStore(state => state.entries);
  const [filter, setFilter] = useState('all');

  const icons = { call: Call, text: Text, video: Video };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#1A1A1A]">Timeline</h1>

      <select
        onChange={e => setFilter(e.target.value)}
        className="mb-8 w-full max-w-xs bg-white border border-gray-200 rounded-2xl py-4 px-6 text-gray-700 outline-none shadow-sm"
      >
        <option value="all">Filter Timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      <div className="space-y-4">
        {entries
          .filter(
            item => filter === 'all' || item.type.toLowerCase() === filter,
          )
          .map(item => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex items-center gap-4"
            >
              <div className="bg-gray-50 p-3 rounded-full">
                <img
                  src={icons[item.type.toLowerCase()]}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">
                  {item.type} with {item.friendName}
                </p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}

        {entries.length === 0 && (
          <p className="text-center text-gray-400 py-10">No history yet.</p>
        )}
      </div>
    </div>
  );
}
