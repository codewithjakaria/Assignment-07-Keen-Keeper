import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import useTimelineStore from '../data/TimelineData';

export default function Stats() {
  const entries = useTimelineStore(state => state.entries);

  const data = [
    {
      name: 'Text',
      value: entries.filter(e => e.type === 'Text').length,
      color: '#8B5CF6',
    },
    {
      name: 'Call',
      value: entries.filter(e => e.type === 'Call').length,
      color: '#244D3F',
    },
    {
      name: 'Video',
      value: entries.filter(e => e.type === 'Video').length,
      color: '#10b981',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-[40px] font-bold text-[#1A1A1A] mb-12">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-[24px] p-16 shadow-sm border border-gray-50">
        <h2 className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-10">
          By Interaction Type
        </h2>

        <div className="flex flex-col items-center">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={85}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((item, index) => (
                    <Cell key={index} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex gap-8 mt-10">
            {data.map(item => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
