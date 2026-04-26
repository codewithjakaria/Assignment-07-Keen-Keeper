import { Link } from 'react-router-dom';
import friends from '../data/FriendsData.json';
import FriendCard from '../components/FriendsCard.jsx';
import { Plus } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="bg-[#F8FAFC] min-h-screen">
      
        <div className="bg-white py-16 text-center border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Friends to keep close in your life
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="bg-[#244D3F] text-white px-6 py-3 rounded-xl flex items-center gap-2 mx-auto font-medium hover:bg-[#1a3a2f] transition-all shadow-sm">
              <Plus size={20} />
              Add a Friend
            </button>
          </div>
        </div>

     
        <div className="max-w-7xl mx-auto px-4 mt-8">
          
         
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 text-center">
              <h2 className="text-3xl font-bold text-[#1A1A1A]">10</h2>
              <p className="text-gray-400 text-sm mt-1 uppercase font-semibold tracking-wider">
                Total Friends
              </p>
            </div>

          
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 text-center">
              <h2 className="text-3xl font-bold text-[#1A1A1A]">3</h2>
              <p className="text-gray-400 text-sm mt-1 uppercase font-semibold tracking-wider">
                On Track
              </p>
            </div>

        
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 text-center">
              <h2 className="text-3xl font-bold text-[#1A1A1A]">6</h2>
              <p className="text-gray-400 text-sm mt-1 uppercase font-semibold tracking-wider">
                Need Attention
              </p>
            </div>

           
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 text-center">
              <h2 className="text-3xl font-bold text-[#1A1A1A]">12</h2>
              <p className="text-gray-400 text-sm mt-1 uppercase font-semibold tracking-wider">
                Interactions This Month
              </p>
            </div>
          </div>
        </div>

  
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-8">
            Your Friends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {friends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
